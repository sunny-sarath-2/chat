const mongoose = require("mongoose");

let messages_schema = mongoose.Schema({
  sender_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  reciver_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  message: { type: String, required: true },
  created_date: { type: Date, default: new Date() },
});

const messages_model = mongoose.model("messages", messages_schema);

module.exports = messages_model;
