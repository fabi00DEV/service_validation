import SendgridService from "./SendgridService";

export default class SendgridController {
  constructor(app, router, routerPrefix) {
    this.service = new SendgridService();
    app.use(routerPrefix, router);
    this.routes(router);
  }

  async routes(router) {
    router
      .post(
        "/send/email-verify",
        this.service.sendEmailVerification.bind(this.service)
      )
      .get("/verify-code", this.service.verfifyCode.bind(this.service));
  }
}
