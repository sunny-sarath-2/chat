let User = require("../models/users.model");

exports.login = (user_email, user_password) => {
  return User.find({
    user_email: user_email,
    user_password,
  });
};
