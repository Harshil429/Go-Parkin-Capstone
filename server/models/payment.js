const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    cardholderName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 96,
    },
    cardNumber: {
      type: String,
      required: true,
      trim: true,
      length: 16,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    cvvCode: {
      type: Number,
      required: true,
      trim: true,
      length: 3,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);
