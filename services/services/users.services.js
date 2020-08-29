let User = require("../models/users.model");

exports.getAllUsers = (id) => {
  return User.find({ _id: { $ne: id } });
};

exports.forgetPassword = () => {
  return User.find();
};

exports.createUser = (user) => {
  let newUser = new User(user);
  return newUser.save();
};
