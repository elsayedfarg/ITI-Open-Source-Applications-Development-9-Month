const donation = require("../models/donation");
const axios = require("axios");

const httpClient = axios.create({
  baseURL: process.env.POVIDER_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.KASHIER_SECRET_KEY,
    "api-key": KASHIER_API_KEY,
  },
});

const createPaymentSessionFromProvider = async (amount) => {
  // const order: `DONATION-${Date.now()}`
  const response = await httpClient.post("/v3/payment/sessions", {
    paymentType: "credit",
    amount: amount, // number (e.g. 100.00)
    currency: "EGP",
    order: order,
    orderId: `order_${Date.now()}`, // must be unique
    merchantOrderId: process.env.KASHIER_MERCHANT_ID,

    redirectUrl: `${window.location.origin}/payment/success`,
    failureRedirectUrl: `${window.location.origin}/payment/failure`,

    paymentMethod: "card",

    metaData: {
      source: "web",
    },
  });

  return response.data;
};

const createDonation = async(req, (res) => {
  // create payment
});

const handelWebhook = async((req, res) => {});

const updateDonationStatus = async((req, res) => {});

module.exports = {
  createPaymentSessionFromProvider,
  createDonation,
  handelWebhook,
  updateDonationStatus,
};
