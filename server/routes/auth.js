const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const { signout, signup, signin } = require("../controllers/auth");

router.post(
  "/register",
  [
    check("firstName", "First name is required!").not().isEmpty(),
    check("contactNumber")
      .matches(/^\d{10}$/)
      .withMessage("Contact number must be a 10-digit number"),
    check("email", "Email is not valid!").isEmail(),
    check(
      "password",
      "Password should be contain at least 3 characters!"
    ).isLength({
      min: 3,
    }),
  ],
  signup
);
router.post("/login", signin);
router.get("/signout", signout);

module.exports = router;
