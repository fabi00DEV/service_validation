import mongoose from "mongoose";

export default class MongoConnection {
  constructor() {
    mongoose.connect(
      "mongodb+srv://root:root@cluster0-jyyoq.mongodb.net/dbtest?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );

    mongoose.set("useFindAndModify", false);
  }
}
