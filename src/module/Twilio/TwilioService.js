import TwilioHelper from "./TwilioHelper";

export default class TwilioService {
  constructor() {
    this.helper = new TwilioHelper();
  }

  async sendMessage(req, res) {
    const { number, msg } = req.body;
    this.helper
      .sendMessage(number, msg)
      .then(msg => {
        res.json(msg);
      })
      .catch(error => {
        res.json(error);
      });
  }

  async createVerfifyService(req, res) {
    const { name } = req.body;

    this.helper
      .createVerifyService(name)
      .then(service => {
        res.json(service);
      })
      .catch(error => {
        res.json(error);
      });
  }

  async listVerfifyService(req, res) {
    this.helper
      .listVerififyService()
      .then(services => {
        res.json(services);
      })
      .catch(error => res.json(error));
  }

  async sendVerificationCode(req, res) {
    const { number, chanel, service } = req.body;
    this.helper
      .sendVerificationCode(number, chanel, service)
      .then(verification_check => res.json(verification_check))
      .catch(error => res.json(error));
  }

  async receivingVerificationCode(req, res) {
    const { number, code, service } = req.body;
    this.helper
      .receivingVerificationCode(number, code, service)
      .then(verification_check => res.json(verification_check.status))
      .catch(error => res.json(error));
  }
}
