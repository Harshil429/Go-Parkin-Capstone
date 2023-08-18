const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    message: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("InquiryMsg", inquirySchema);
