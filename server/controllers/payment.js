const { validationResult } = require("express-validator");
const Payment = require("../models/payment");

exports.paymentGateway = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array(),
    });
  }

  const payment = new Payment(req.body);

  payment.save((err, pay) => {
    if (err) {
      return res.status(400).json({
        error: "Payment was not successfull!" + err,
      });
    }
    res.status(200).json({
      msg: "Payment done!",
      data: pay,
    });
  });
};
