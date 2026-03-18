const express = require("express");
const donationController = require("../controllers/donations");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");
const donateSchema = require("../schemas/donation/donateSchema");

const router = express.Router();

router.post("/", validate(donateSchema), donationController.createDonation);
router.post("/webhook");

module.exports = router;
