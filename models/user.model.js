const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      require: true,
      minlength: [3, "First name must be least 3 character long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be least 3 character long"],
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: [5, "Email must be length of 5 characters"],
  },
});
