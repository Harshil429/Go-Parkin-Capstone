const Reservation = require("../models/reservation");

exports.bookParkingSpot = (req, res) => {
  const { dateOfBooking, entryTime, exitTime, location } = req.body;
  if (!dateOfBooking) {
    return res.status(400).json({
      errors: "Please enter the booking date!",
    });
  }
  if (new Date(dateOfBooking) <= new Date()) {
    return res.status(400).json({
      errors: "Booking date must be in the future!",
    });
  }
  if (!entryTime) {
    return res.status(400).json({
      errors: "Please select the entry time!",
    });
  }
  if (new Date(entryTime) <= new Date()) {
    return res.status(400).json({
      errors: "Entry time must be in the future!",
    });
  }
  if (!exitTime) {
    return res.status(400).json({
      errors: "Please select the exit date!",
    });
  }
  if (new Date(exitTime) <= new Date()) {
    return res.status(400).json({
      errors: "Exit time must be in the future!",
    });
  }
  if (!location) {
    return res.status(400).json({
      errors: "Please enter the location!",
    });
  }
  const reservation = new Reservation(req.body);

  reservation.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: "Reservation not made! Error!" + err,
      });
    }

    return res.status(200).send({
      msg: "RESERVATION BOOKED!",
      data: result,
    });
  });
};

exports.updateBooking = () => {
  //
};
exports.cancelBooking = () => {
  //
};
exports.getAllBookedParkingSpotsByUser = (req, res) => {
  Reservation.find(
    {
      user: req.profile._id,
    },
    (err, bookingList) => {
      if (err || !bookingList) {
        return res.status(400).json({
          error: "There is no booking spots",
        });
      }

      return res.status(200).send(bookingList);
    }
  );
};

exports.getAllAvailableParkingSpots = () => {};
