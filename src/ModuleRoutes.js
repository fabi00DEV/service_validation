import TwilioController from "./module/Twilio/TwilioController";
import SendgridController from "./module/Sendgrid/SendgridController";
import MongoConnection from "./database/MongoConnection";

import express from "express";

export default class ModuleRoutes {
  static async init(app) {
    const router = express.Router();
    
    new MongoConnection();
    new TwilioController(app, router, "/twilio");
    new SendgridController(app, router, "/sendgrid");
    
  }
}
