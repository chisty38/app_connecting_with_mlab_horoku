// require modules for our User Model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required"
    },
    userID: {
      type: String,
      default: "",
      trim: true,
      required: "user ID is required"
    },
    firstName: {
      type: String,
      default: "",
      trim: true,
      required: "firstname is required"
    },
    lastName: {
      type: String,
      default: "",
      trim: true,
      required: "lastname is required"
    },
    email: {
      type: String,
      default: "",
      trim: true,
      match: /.+\@.+\..+/,
      required: "email is required"
    },
    category: {
      type: String,
      default: "",
      trim: true,
      required: "category is required"
    }
  },
  {
    collection: "users"
  }
);

// configure options for the UserSchema

let options = ({
    missingPasswordError: "Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userSchema);