import mongoose from "mongoose";

class EmailStatusModel {
  schema() {
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
    return (
      mongoose.models.emailStatus || mongoose.model("emailStatus", EmailStatus)
    );
  }
}

export default new EmailStatusModel();
