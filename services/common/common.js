const jwt = require("jsonwebtoken");

exports.outputFormat = (result = null, message, status = 404, error = null) => {
  return {
    result,
    message,
    status,
    error,
  };
};

exports.verify_token = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader;
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    req.token = null;
    next();
  }
};

exports.verify = (req, res, next) => {
  jwt.verify(req.token, "secret", (err, authdata) => {
    if (err)
      res.status(401).send({
        status: 401,
        result: null,
        error: err,
        message: "unauthorized",
      });
    else {
      req.authdata = authdata;
      next();
    }
  });
};

exports.generateToken = (result) => {
  try {
    const token = jwt.sign({ data: result }, "secret", { expiresIn: "8h" });
    return token;
  } catch (err) {
    return null;
    console.log(err);
  }
};
