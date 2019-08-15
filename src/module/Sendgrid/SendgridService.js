import SendgridHelper from "./SendgridHelper";
import SHA256 from "crypto-js/sha256";
import EmailStatusModel from "./models/EmailStatus";

export default class SendgridService {
  constructor() {
    this.helper = new SendgridHelper();
    this.emailSchema = EmailStatusModel.schema();
  }

  async sendEmailVerification(req, res) {
    const { to, subject } = req.body;

    const token = SHA256(to, process.env.CRYPT_KEY);

    const email = {
      to: to,
      from: process.env.SENDGRID_EMAIL,
      subject: subject,
      templateId: "d-fba74a62afef4dd982ec9868fd917635",
      dynamic_template_data: {
        url: `${req.hostname}/sendgrid/verify-code?token=${token}`
      }
    };

    const emailExist = await this.emailSchema.find({ email: to });
    if (emailExist.length >= 1) {
      res.json({
        msg: "email already exists"
      });
    } else {
      const emailVerification = await this.emailSchema.create({
        email: to,
        status: "pending",
        token: token
      });

      this.helper
        .sendEmail(email)
        .then(response => {
          res.json({
            msg: "Email successfully sent !"
          });
        })
        .catch(error => {
          console.log(error);
          res.status(400).json({
            msg: error
          });
        });
    }
  }

  async verfifyCode(req, res) {
    try {
      const { token } = req.query;
      const email = await this.emailSchema.findOneAndUpdate(
        { token: token },
        { status: "validated" },
        { new: true }
      );
      if (email) {
        res.json({ email: email, msg: "Successfully verified! " });
      } else {
        res.status(404).json({ msg: "Invalid Token" });
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
}
