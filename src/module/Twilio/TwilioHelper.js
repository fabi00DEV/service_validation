import twilio from "twilio";

export default class TwilioHelper {
  constructor() {
    this.client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
  }

  async sendMessage(number, msg) {
    return this.client.messages.create({
      body: msg,
      from: process.env.PHONE,
      to: number
    });
  }

  async createVerifyService(name) {
    return this.client.verify.services.create({ friendlyName: name });
  }

  async listVerififyService() {
    return this.client.verify.services.list({ limit: 20 });
  }

  async sendVerificationCode(phone, chanel, service) {
    return this.client.verify.services(service).verifications.create({ to: phone, channel: chanel });
  }

  async receivingVerificationCode(phone, code, service) {
    return this.client.verify.services(service).verificationChecks.create({ to: phone, code: code });
  }
}
