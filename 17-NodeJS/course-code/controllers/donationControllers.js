const donationService = require("../services/donationServices");
const APIError = require("../utils/APIError");

const createDonation = async (req, res) => {
  const { amount } = req.body;
  let session;
  try {
    session = await donationService.createPaymentSessionFromProvider(amount);
  } catch (err) {
    throw new APIError("service unavailable", 503);
  }

  const donationData = {
    sessionId: session._id,
    orderId: session.paymentParams.order,
    amount: session.paymentParams.amount,
    sessionURL: session.sessionUrl,
  };

  const donation = await donationService.createDonation(donationData);

  res.status(200).json({
    message: "Donation link created",
    data: {
      sessionURL: donation.sessionURL,
    },
  });
};

const webhook = async (req, res) => {
  console.log("webhook", req.body);
};

module.exports = {
  createDonation,
  webhook,
};
