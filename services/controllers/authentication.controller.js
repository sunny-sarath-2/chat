const { login } = require("../services/authentication.services");
const { outputFormat, generateToken } = require("../common/common");
const Joi = require("joi");
const md5 = require("md5");

exports.login = async (req, res) => {
  try {
    let params = Joi.attempt(req.body, loginSchema);
    const { user_email, user_password } = params;

    let result = await login(user_email, md5(user_password));

    if (!!result.length) {
      let { user_name, user_email, _id } = result[0];
      let token = generateToken({ user_name, user_email, _id });
      res
        .status(200)
        .json(
          outputFormat(
            { user: result[0], accessToken: token },
            "users details",
            200,
            null
          )
        );
    } else {
      throw new Error("no user found");
    }
  } catch (error) {
    res.status(406).json(outputFormat(null, error.message, 406, error));
  }
};

exports.verifyToken = (req, res) => {
  res
    .status(200)
    .json(outputFormat({ message: "A valid user" }, "A valid user", 200, null));
};

const loginSchema = Joi.object().keys({
  user_email: Joi.string().required(),
  user_password: Joi.string().required(),
});
