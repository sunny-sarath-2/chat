let express = require("express");
let router = express.Router();

const authentication = require("./api/authentication.routes");
router.use("/authentication", authentication);

const users = require("./api/user.routes");
router.use("/user", users);

const messages = require("./api/messages.routes");
router.use("/messages", messages);

module.exports = router;
