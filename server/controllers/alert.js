let express = require("express");
let router = express.Router();

let alertModel = require("../models/alert");

module.exports.displayAlertPage = (req, res, next) => {
  res.json({ success: true, msg: "Successfully Displayed Alert Page" });
};

module.exports.processAlertPage = (req, res, next) => {
  let newAlert = alertModel({
    patientID: req.body.patientID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    description: req.body.description
  });

  alertModel.create(newAlert, (err, alert) => {
    if (err) {
      console.log(err);
      
    } else {
      res.json({ success: true, msg: "Successfully Added New Alert" });
    }
  });
};
