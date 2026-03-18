const Donation = require("../models/donation");
const axios = require("axios");

const httpClient = axios.create({
  baseURL: process.env.KASHIER_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.KASHIER_SECRET_KEY,
    "api-key": process.env.KASHIER_API_KEY,
  },
});

const createPaymentSessionFromProvider = async (amount) => {
  try {
    const response = await httpClient.post(`/v3/payment/sessions`, {
      //   "expireAt": "2025-01-28T17:27:32.359Z",
      //   "maxFailureAttempts": 3,
      paymentType: "credit",
      amount: String(amount),
      currency: "EGP",
      order: `DONATION-${Date.now()}`,
      merchantRedirect: "https://example.com/redirect",
      display: "en",
      //   "type": "one-time",
      allowedMethods: "card,wallet",
      redirectMethod: null,
      iframeBackgroundColor: "#FFFFFF",
      merchantId: process.env.KASHIER_MERCHANT,
      //   "metaData": {
      //       "customKey": "customValue",
      //       "displayNotes": {"key": "value"}
      //   },
      failureRedirect: false,
      brandColor: "#FF5733",
      defaultMethod: "card",
      description: "Payment for order ORD123456",
      manualCapture: false,
      customer: {
        email: "sayed@gmail.com",
        reference: "894321",
      },
      saveCard: "optional",
      //   "retrieveSavedCard": true,
      interactionSource: "ECOMMERCE",
      enable3DS: true,
      serverWebhook:
        "https://homelike-kaidence-modishly.ngrok-free.dev/donation/webhook",
      notes: "support me",
    });
    return response?.data || null;
  } catch (err) {
    console.error("Kashier response:", err.response?.data);
  }
};

const createDonation = async (donationData) => {
  const donation = await Donation.create(donationData);
  return donation;
};

const handleWebhook = () => {};

const updateDonationStatus = () => {};

module.exports = {
  createPaymentSessionFromProvider,
  createDonation,
  handleWebhook,
  updateDonationStatus,
};
