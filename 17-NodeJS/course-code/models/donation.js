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
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },
    sessionURL: {
      type: String,
    },
    webhookData: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true },
);

// model
const DonationModel = mongoose.model("Donation", donationSchema);

module.exports = DonationModel;
