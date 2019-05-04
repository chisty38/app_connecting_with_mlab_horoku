let mongoose = require("mongoose");

// create a model class
let alertSchema = mongoose.Schema(
  {
    patientID: {
      type: String,
      default: "",
      trim: true,
      required: "patient ID is required"
    },
    firstName: {
      type: String,
      default: "",
      trim: true,
      required: "first name is required"
    },
    lastName: {
      type: String,
      default: "",
      trim: true,
      required: "last name is required"
    },
    description: {
      type: String,
      default: "",
      trim: true,
      required: "description is required"
    }
  },
  {
    collection: "alert"
  }
);

module.exports = mongoose.model("alert", alertSchema);
