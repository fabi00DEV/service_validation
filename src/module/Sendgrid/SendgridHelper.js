import sendgrid from "@sendgrid/mail";

export default class SendgridHelper {
  constructor() {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(msg) {
      return sendgrid.send(msg);  
  }

}
