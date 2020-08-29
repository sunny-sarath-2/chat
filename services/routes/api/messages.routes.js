let express = require("express");
let router = express.Router();
const { verify } = require("../../common/common");
const {
  getUserMessages,
  deleteMessages,
} = require("../../controllers/messaes.controller");

router.post("/get-by-user", verify, getUserMessages);
router.delete("/delete", verify, deleteMessages);

module.exports = router;
