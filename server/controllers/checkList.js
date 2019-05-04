let express = require("express");
let router = express.Router();

module.exports.displayResultPage = (req, res, next) => {
    if(!req.user) {
      res.redirect('/login');
    } else {
    res.render("patients/checkList", {
      title: "See the Result of Check List",
      category: req.user.category,
      firstName: req.user ? req.user.firstName : ""
    });
  }
  };