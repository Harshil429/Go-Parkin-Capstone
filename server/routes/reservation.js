const express = require("express");

const router = express.Router();

const {
  bookParkingSpot,
  cancelBooking,
  updateBooking,
  getAllBookedParkingSpotsByUser,
  getAllAvailableParkingSpots,
} = require("../controllers/reservation");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);

router.get("/spots", getAllAvailableParkingSpots);
router.post("/book", bookParkingSpot);
router.get("/booked/:userId", getAllBookedParkingSpotsByUser);
router.delete("/cancel/:userId/:bookingId", cancelBooking);
router.put("/update/:userId/:bookingId", updateBooking);

module.exports = router;
