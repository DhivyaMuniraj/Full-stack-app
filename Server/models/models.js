const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emp_id: {
    type: Number,
    default: 0,
  },
  email:{
    type: String,
  },
  password:{
    type: String,
  }
});

const User = mongoose.model("User", UserSchema);


module.exports = User;