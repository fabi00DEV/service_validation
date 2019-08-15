import TwilioService from "./TwilioService";

export default class TwilioController {
  constructor(app, router, routerPrefix) {
    this.service = new TwilioService();
    app.use(routerPrefix, router);
    this.routes(router);
  }

  async routes(router) {
    router
      .post("/send/message", this.service.sendMessage.bind(this.service))
      .post("/create/verify-service", this.service.createVerfifyService.bind(this.service))
      .get("/list/verify-service", this.service.listVerfifyService.bind(this.service))
      .post("/send/verification-code", this.service.sendVerificationCode.bind(this.service))
      .post("/receiving/verification-code", this.service.receivingVerificationCode.bind(this.service));
  }
}
