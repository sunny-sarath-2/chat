let express = require("express");
let router = express.Router();
const { verify } = require("../../common/common");
const {
  login,
  verifyToken,
} = require("../../controllers/authentication.controller");

router.post("/login", login);
router.get("/verify-token", verify, verifyToken);

module.exports = router;
