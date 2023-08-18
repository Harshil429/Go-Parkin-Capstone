const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const { getUser, getUserById, updateUser } = require("../controllers/user");

router.param("userId", getUserById);

// get the user profile data
router.get("/:userId", getUser);
router.post(
  "/:userId/update",
  [
    check("firstName", "First name is required!").not().isEmpty(),
    check("lastName", "Last name is required!").not().isEmpty(),
    check("contactNumber")
      .matches(/^\d{10}$/)
      .withMessage("Contact number must be a 10-digit number"),
  ],
  updateUser
);

module.exports = router;
