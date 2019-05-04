let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// define the User Model
let userModel = require("../models/user");
let User = userModel.User; // alias

/*
module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    firstName: req.user ? req.user.firstName : ""
  });
};

module.exports.displayDailysPage = (req, res, next) => {
  if(!req.user) {
    res.redirect('/login');
  } else {
  res.render("index", {
    title: "Dailys",
    category: req.user.category,
    firstName: req.user ? req.user.firstName : ""
  });
}
};

module.exports.displayVideoPage = (req, res, next) => {
  if(!req.user) {
    res.redirect('/login');
  } else {
  res.render("index", {
    title: "Video",
    category: req.user.category,
    firstName: req.user ? req.user.firstName : ""
  });
}
};

module.exports.displayCheckListPage = (req, res, next) => {
  if(!req.user) {
    res.redirect('/login');
  } else {
  res.render("index", {
    title: "Check List",
    category: req.user.category,
    firstName: req.user ? req.user.firstName : ""
  });
}
};

module.exports.displayvitalSignPage = (req, res, next) => {
  if(!req.user) {
    res.redirect('/login');
  } else {
  res.render("index", {
    title: "Vital Sign",
    category: req.user.category,
    firstName: req.user ? req.user.firstName : ""
  });
}
};

module.exports.displayLoginPage = (req, res, next) => {
  // check if user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      firstName: req.user ? req.user.firstName : "" 
    });
  } else {
    return res.redirect("/");
  }
};
*/

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate(
    "local",
    (err, user, info) => {
      // server error?
      if (err) {
        return next(err);
      }
      // is there a user login error?
      if (!user) {
        return res.json({success: false, msg: 'ERROR: Failed to Log In User!'});
      }
      req.logIn(user, err => {
        // server error?
        if (err) {
          return next(err);
        }
        const payload = {
          id: user._id,
          username: user.username,
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email:user.email,
          category: user.category
        }

        const authToken = jwt.sign(payload, DB.secret, {
          expiresIn: 604800 // 1 Week
        });

        return res.json({success: true, msg: 'User Logged in Successfully!', user: {
          id: user._id,
          username: user.username,
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          email:user.email,
          category: user.category
        }, token: authToken});
      });
    }
  )(req, res, next);
};

/*
module.exports.displayRegisterPage = (req, res, next) => {
  if (!req.user) {
    res.render("auth/register", {
      title: "Register",
      messages: req.flash("registerMessage"),
      firstName: req.user ? req.user.firstName : ""
    });
  } else {
    return res.redirect("/");
  }
};
*/

module.exports.processRegisterPage = (req, res, next) => {
  // define a new user object
  let newUser = new User({
    username: req.body.username,
    userID: req.body.userID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    category: req.body.category
  });

  User.register(newUser, req.body.password, err => {
    if (err) {
      console.log("******Error: Inserting New User******");
      if (err.name == "UserExistsError") {
        console.log("Registration Error: User Already Exists!");
      }
      return res.json({success: false, msg: '******ERROR: Failed to Register User!******'});
    } else {
      // if no error exists, then registration is successful

      // redirect the user
      return res.json({success: true, msg: 'User Registered Successfully!'});
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.json({success: true, msg: 'User Successfully Logged out!'});
};
