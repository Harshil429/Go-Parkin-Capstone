const express = require("express");
const moment = require("moment");
const { check } = require("express-validator");

const { paymentGateway } = require("../controllers/payment");

const router = express.Router();

router.post(
  "/",
  [
    check("cardholderName", "Card Holder Name is required!").isEmpty(),
    check("cardNumber", "Card Number must be 16 digit!").isLength(16),
    check("expiryDate")
      .isCreditCard()
      .withMessage("Expiry Date is not valid!")
      .custom((value, { req }) => {
        const currentDate = moment();
        const enteredDate = moment(value, "MM/YYYY");
        if (
          !enteredDate.isValid() ||
          enteredDate.isBefore(currentDate, "month")
        ) {
          throw new Error("Credit card is expired!");
        }
        return true;
      }),
    check("cvvCode", "CVV is not valid!").isLength(3),
  ],
  paymentGateway
);

module.exports = router;
