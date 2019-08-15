import mongoose from "mongoose";

export default class MongoConnection {
  constructor() {
    mongoose.connect(
      process.env.MONGO_URL_CONNECTION,
      { useNewUrlParser: true }
    );

    mongoose.set("useFindAndModify", false);
  }
}
