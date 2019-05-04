let mongoose = require("mongoose");

// create a model class
let dailyInfoSchema = mongoose.Schema(
  {
    patientID: {
      type: String,
      default: "",
      trim: true,
      required: "patient ID is required"
    },
    water: {
      type: String,
      default: "",
      trim: true,
      required: "water is required"
    },
    exercise: {
      type: String,
      default: "",
      trim: true,
      required: "exercise is required"
    },
    smoke: {
      type: String,
      default: "",
      trim: true,
      required: "smoke is required"
    },
    weight: {
      type: String,
      default: "",
      trim: true,
      required: "weight is required"
    },
    height: {
      type: String,
      default: "",
      trim: true,
      required: "height is required"
    }
  },
  {
    collection: "dailyInfo"
  }
);

module.exports = mongoose.model("dailyInfo", dailyInfoSchema);
