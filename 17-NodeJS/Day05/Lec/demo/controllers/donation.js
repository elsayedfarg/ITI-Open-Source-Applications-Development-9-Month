const donationService = require("../services/donation");

const createDonation = async (req, res) => {
  // create payment
  const { amount } = req.body;

  const session = await donateService.createPaymentSessionFromProvider(amount);
};

const webhook = async(req, (res) => {
  // create payment
});

module.exports = {
  createDonation,
  webhook,
};
