import mongoose from "mongoose";

const EmailStatus = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  }
});

mongoose.model("EmailStatus", EmailStatus);


