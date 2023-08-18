const express = require("express");

const { check } = require("express-validator");

const { getUserById } = require("../controllers/user");
const {
  createVehicle,
  getVehicleInfo,
  updateVehicle,
} = require("../controllers/vehicle");

const router = express();

router.param("userId", getUserById);

router.post(
  "/create/:userId",
  [
    check("make", "Make is required").not().isEmpty(),
    check("model", "Model is required").not().isEmpty(),
    check(
      "platNumber",
      "Plat Number must be between 6 and 10 characters"
    ).isLength({ min: 6, max: 10 }),
    check("year", "Year must be a valid year").isInt({
      min: 1900,
      max: new Date().getFullYear(),
    }),
  ],
  createVehicle
);

router.get("/:userId", getVehicleInfo);

router.post(
  "/:userId/update",
  [
    check("make", "Make is required").not().isEmpty(),
    check("model", "Model is required").not().isEmpty(),
    check(
      "platNumber",
      "Plat Number must be between 6 and 10 characters"
    ).isLength({ min: 6, max: 10 }),
    check("year", "Year must be a valid year").isInt({
      min: 1900,
      max: new Date().getFullYear(),
    }),
  ],
  updateVehicle
);

module.exports = router;
