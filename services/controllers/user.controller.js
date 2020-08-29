const {
  getAllUsers,
  createUser,
  forgetPassword,
} = require("../services/users.services");
const { outputFormat, decodeJWT } = require("../common/common");
let Joi = require("joi");
const md5 = require("md5");

exports.getAllUsers = async (req, res) => {
  try {
    const user = decodeJWT(req.token);
    res
      .status(200)
      .json(
        outputFormat(await getAllUsers(user.data._id), "all users", 200, null)
      );
  } catch (error) {
    res.status(406).json(outputFormat(null, error.message, 406, error));
  }
};

exports.forgetPassword = async (req, res) => {
  try {
    let params = Joi.attempt(req.body, forgetPasswordSchema);
    params.user_password = params.user_password.toLowerCase();
    const { user_email, user_password } = params;
    let user = {
      user_email,
      user_password: md5(user_password),
    };

    res
      .status(200)
      .json(
        outputFormat(await forgetPassword(user), "user updated", 200, null)
      );
  } catch (error) {
    res.status(406).json(outputFormat(null, error.message, 406, error));
  }
};

exports.createUser = async (req, res) => {
  try {
    let params = Joi.attempt(req.body, createUserSchema);
    params.user_password = params.user_password.toLowerCase();
    const { user_email, user_password, user_id, user_name } = params;
    let user = {
      user_email,
      user_password: md5(user_password),
      user_id,
      created_ip: req.ip,
      last_access_ip: req.ip,
      user_name,
    };
    res
      .status(200)
      .json(outputFormat(await createUser(user), "user created", 200, null));
  } catch (error) {
    res.status(406).json(outputFormat(null, error.message, 406, error));
  }
};

const createUserSchema = Joi.object().keys({
  user_id: Joi.string().required(),
  user_email: Joi.string().required(),
  user_password: Joi.string().required(),
  user_name: Joi.string().required(),
});

const forgetPasswordSchema = Joi.object().keys({
  user_email: Joi.string().required(),
  user_password: Joi.string().required(),
});
