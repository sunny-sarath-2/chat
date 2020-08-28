let express = require("express");
let router = express.Router();

const authentication = require("./api/authentication.routes");
router.use("/authentication", authentication);

const users = require("./api/user.routes");
router.use("/user", users);

module.exports = router;
