const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");
// const authenticate = require("../middlewares/authenticate");
// const restrictTo = require("../middlewares/restrictTo");
const schemas = require("../schemas/donationSchemas");
const donationController = require("../controllers/donationControllers");

router.post(
  "/",
  validate(schemas.donateSchema),
  donationController.createDonation,
);

router.post("/webhook", donationController.webhook);

module.exports = router;
