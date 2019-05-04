let express = require("express");
let router = express.Router();

let alertModel = require('../models/alert');

module.exports.displayalerts = (req, res, next) => {
    alertModel.find((err, alerts) => {
      if (err) {
        return console.error(err);
      } else {
        //console.log(contactList);
  
        res.json({ success: true, alerts:alerts, user: req.user });
      }
    });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  alertModel.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else {
        res.json({ success: true, msg: "Successfully Deleted Alert" });
      }
  });
};