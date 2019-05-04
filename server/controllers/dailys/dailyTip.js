let express = require("express");
let router = express.Router();

let vitalModel = require("../../models/vitalSign");

module.exports.displayDailyTip = (req, res, next) => {
    vitalModel.find({"patientID":req.user.userID},(err, vitalList) => {
      if (err) {
        return console.error(err);
      } else{  
        res.json({ success: true, vitalList: vitalList, user: req.user });
      }
    });
};
