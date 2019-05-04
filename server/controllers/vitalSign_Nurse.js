let express = require("express");

let router = express.Router();

let jwt = require('jsonwebtoken');

let vitalModel = require("../models/vitalSign");

module.exports.displayvitalList = (req, res, next) => {
    vitalModel.find((err, vitalList) => {
      if (err) {
        return console.error(err);
      } else {
        res.json({ success: true, vitalList: vitalList, user: req.user });
      }
    });
};

module.exports.displayAddPage = (req, res, next) => {
  res.json({ success: true, msg: "Successfully Displayed Add Page" });
};

module.exports.processAddPage = (req, res, next) => {
    let newVital = vitalModel({
      patientID: req.body.patientID,
      temp: req.body.temp,
      heartRate: req.body.heartRate,
      bloodPressure: req.body.bloodPressure,
      respiratoryRate: req.body.respiratoryRate,
      dailyTip: req.body.dailyTip
    });
  
    vitalModel.create(newVital, (err, vital) => {
      if (err) {
        console.log(err);
  
        res.end(err);
      } else {
        res.json({ success: true, msg: "Successfully Added New Vital Sign List" });
      }
    });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  vitalModel.findById(id, (err, vitalObject) => {
    if (err) {
      console.log(err);

      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Displayed Vital Sign List to Edit",
        vital: vitalObject
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedVital = vitalModel({
    _id: id,

    patientID: req.body.patientID,
    temp: req.body.temp,
    heartRate: req.body.heartRate,
    bloodPressure: req.body.bloodPressure,
    respiratoryRate: req.body.respiratoryRate,
    dailyTip: req.body.dailyTip
  });

  vitalModel.update({ _id: id }, updatedVital, err => {
    if (err) {
      console.log(err);

      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Edited Vital Sign List",
        vital: updatedVital
      });
    }
  });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    vitalModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else {
          res.json({ success: true, msg: "Successfully Deleted Vital Sign List" });
        }
    });
};

