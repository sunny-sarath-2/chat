let express = require("express");
let router = express.Router();

const authentication = require("./api/authentication.routes");
router.use("/authentication", authentication);

module.exports = router;
