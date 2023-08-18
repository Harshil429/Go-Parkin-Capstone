const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const expressJwt = require("express-jwt");
const { validationResult } = require("express-validator");

const User = require("../models/user");
const { welcomeText } = require("../Email/Templates");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()[0].msg,
    });
  }

  if (req.body.password === req.body.confirmPassword) {
    const user = new User(req.body);

    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: "User is not saved in DB!" + err,
        });
      }
      res.json({
        msg: "User created!",
        firstName: user.firstName,
        email: user.email,
        id: user._id,
      });

      setTimeout(async () => {
        const transporter = nodemailer.createTransport({
          host: process.env.NODEMAILER_HOST,
          port: process.env.NODEMAILER_PORT,
          secure: false,
          auth: {
            user: process.env.NODEMAILER_ADMIN_EMAIL,
            pass: process.env.NODEMAILER_AUTH_PASSWORD,
          },
        });

        await transporter
          .sendMail({
            from: process.env.NODEMAILER_ADMIN_EMAIL,
            to: req.body.email,
            subject: "Welcome to GoParking! Your Parking Spot Awaits.",
            html: welcomeText(req.body.firstName),
          })
          .then(() => {
            console.log("Signup email sent!");
          })
          .catch((error) => {
            console.log("Signup email sent error!", error);
          });
      }, 2000);
    });
  } else {
    return res.status(422).json({
      errors: "Password doesn't match!",
    });
  }
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne(
    {
      email,
    },
    (err, user) => {
      if (err || !user) {
        return res.status(422).json({
          errors: "Please enter valid email address!",
        });
      }

      if (!user.isPasswordMatch(password)) {
        return res.status(422).json({
          errors: "You've entered incorrect password!",
        });
      }

      // create the token
      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.SECRET_KEY
      );

      // save token into browser's cookie
      res.cookie("token", token, {
        expire: new Date() + 9999,
      });

      // send response to front end

      // destructer user
      const { role, email, firstName, _id } = user;

      return res.status(200).json({
        msg: "User logged in successfully",
        token,
        user: {
          _id,
          email,
          firstName,
          role,
        },
      });
    }
  );
};

exports.signout = (req, res) => {
  // clear the cookie
  res.clearCookie("token");
  return res.status(200).json({
    msg: "Customer logout successfully",
  });
};

//middlewares

//protected route - checker for token
exports.isSignedIn = expressJwt({
  secret: "capstonegroup2",
  requestProperty: "auth",
});

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
  const checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      err: "ACCESS DENIED!",
    });
  }
  next();
};

// check for admin
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      err: "You are not the admin, Access Denied!",
    });
  }
  next();
};
