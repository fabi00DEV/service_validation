import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ModuleRoutes from "../src/ModuleRoutes";
import mongoose from "mongoose";

dotenv.config();
const app = express();


app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`Running in ${process.env.PORT}`);
  ModuleRoutes.init(app);
});
