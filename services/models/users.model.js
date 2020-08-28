const mongoose = require("mongoose");

let users_schema = mongoose.Schema({
  user_id: { type: String, required: true },
  user_name: { type: String, required: true },
  user_email: { type: String, required: true },
  user_password: { type: String, required: true },
  created_date: { type: Date, default: Date.now },
  created_ip: { type: String, default: "0.0.0.0" },
  last_access_date: { type: Date, default: Date.now },
  last_access_ip: { type: String, default: "0.0.0.0" },
  disabled: { type: Boolean, default: false },
  disabledOn: Date,
});

const users_model = mongoose.model("users", users_schema);

module.exports = users_model;
