import SendgridService from './SendgridService';
const requireDir = require("require-dir");

export default class SendgridController{
  constructor(app, router, routerPrefix){
    requireDir('./models');
    this.service = new SendgridService();
    app.use(routerPrefix, router);
    this.routes(router);
  }

  async routes(router) {
    router
    .post("/send/email-verify", this.service.sendEmailVerification.bind(this.service))
    .get("/verify-code", this.service.verfifyCode.bind(this.service));
  }

}