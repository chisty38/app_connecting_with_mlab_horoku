// body temperature, heart rate, blood pressure, or respiratory rate
let mongoose = require("mongoose");

// create a model class
let vitalSchema = mongoose.Schema(
  {
    patientID: {
      type: String,
      default: "",
      trim: true,
      required: "patient ID is required"
    },
    temp: {
      type: String,
      default: "",
      trim: true,
      required: "body temperature is required"
    },
    heartRate: {
      type: String,
      default: "",
      trim: true,
      required: "heart rate is required"
    },
    bloodPressure: {
      type: String,
      default: "",
      trim: true,
      required: "blood pressure is required"
    },
    respiratoryRate: {
      type: String,
      default: "",
      trim: true,
      required: "respiratory rate is required"
    },
    dailyTip: String
  },
  {
    collection: "vital"
  }
);

module.exports = mongoose.model("vital", vitalSchema);
