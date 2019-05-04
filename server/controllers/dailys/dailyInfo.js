let express = require("express");
let router = express.Router();

let dailyInfoModel = require("../../models/dailyInfo");

module.exports.displaydailyInfoPage = (req, res, next) => {
  res.json({ success: true, msg: "Successfully Displayed Daily Information Page"});
};

module.exports.processAddPage = (req, res, next) => {
  let newInfo = dailyInfoModel({
    patientID: req.body.patientID,
    water: req.body.water,
    exercise: req.body.exercise,
    smoke: req.body.smoke,
    weight: req.body.weight,
    height: req.body.height
  });

  dailyInfoModel.create(newInfo, (err, vital) => {
    if (err) {
      console.log(err);
      
    } else {
      res.json({ success: true, msg: "Successfully Added New Daily Information" });
    }
  });
};
