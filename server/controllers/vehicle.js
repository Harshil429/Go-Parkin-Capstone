const Vehicle = require("../models/vehicle");

const { validationResult } = require("express-validator");

exports.createVehicle = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()[0].msg,
    });
  }

  const vehicle = new Vehicle(req.body);

  vehicle.save((err, v) => {
    if (err || !v) {
      return res.status(400).json({
        errors: "Vehicle is not saved in DB!" + err,
      });
    }
    return res.status(200).json({
      msg: "Vehicle registered  successfully",
      v,
    });
  });
};

exports.getVehicleInfo = (req, res) => {
  Vehicle.findOne(
    {
      user: req.profile._id,
    },
    (err, vehicle) => {
      if (err || !vehicle) {
        return res.status(400).json({
          err: "Vehicle's info not fetched!" + err,
          vehicleInfo: false,
        });
      }
      return res.status(200).json({
        msg: "Vehicle Info!",
        vehicleInfo: true,
        vehicle,
      });
    }
  );
};

exports.updateVehicle = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()[0].msg,
    });
  }

  Vehicle.updateOne(
    { user: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updatedVehicle) => {
      if (err) {
        return res.status(400).json({
          err: "Vehicle is not updated!" + err,
        });
      }

      return res.status(200).json(updatedVehicle);
    }
  );
};
