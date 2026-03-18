const mongoose = require("mongoose");

// schema
const donationSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED", "REFUNDED"],
      default: "PENDING",
    },
    sessionURL: String,
    webhookData: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true },
);

//model
const donationModel = mongoose.model("Donation", donationSchema);

module.exports = donationModel;
