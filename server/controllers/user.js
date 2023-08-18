const { validationResult } = require("express-validator");

const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User not found in DB!" + err,
      });
    }
    req.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  return res.json(req.profile);
};

exports.updateUser = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()[0].msg,
    });
  }

  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updateUser) => {
      if (err) {
        return res.status(400).json({
          err: "User is not updated!" + err,
        });
      }

      return res.status(200).json(updateUser);
    }
  );
};

exports.contactUsEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_HOST,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_ADMIN_EMAIL,
      pass: process.env.NODEMAILER_AUTH_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.NODEMAILER_ADMIN_EMAIL,
    to: req.body.email,
    subject: "Response - Contact Form | Thank you for contacting GoParking!",
    html: contactMsg(req.body.name),
  });
};
