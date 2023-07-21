const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  admin_name: {
    type: String,
  },
  admin_pass: {
    type: String,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
