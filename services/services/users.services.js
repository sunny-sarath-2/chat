let User = require("../models/users.model");

exports.getAllUsers = () => {
  return User.find();
};

exports.forgetPassword = () => {
  return User.find();
};

exports.createUser = (user) => {
  let newUser = new User(user);
  return newUser.save();
};
