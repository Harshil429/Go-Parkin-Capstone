const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    dateOfBooking: {
      type: Date,
      required: true,
    },
    entryTime: {
      type: mongoose.Schema.Types.Mixed,
      default: 1675231200000,
    },
    exitTime: {
      type: mongoose.Schema.Types.Mixed,
      default: 1675252800000,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
    location: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservation", reservationSchema);
