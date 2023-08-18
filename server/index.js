const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const cors = require("cors");
const app = express();

// require all route files
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const paymentRoutes = require("./routes/payment");
const vehicleRoutes = require("./routes/vehicle");
const parkingSpotRoutes = require("./routes/reservation");

const Inquiry = require("./models/inquiry");

// port number
const port = process.env.PORT_NUMBER;

// db connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED!");
  })
  .catch((error) => {
    console.log("DB CONNECTION ERROR!", error);
  });

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/parking", parkingSpotRoutes);

app.post("/api/inquiry/msg", (req, res) => {
  const i = new Inquiry({
    message: req.body.msg,
    userId: req.body.userID,
  });

  i.save((err, inquiry) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json(inquiry);
  });
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port number ${port}...`);
});
