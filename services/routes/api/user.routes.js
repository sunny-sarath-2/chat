let express = require("express");
let router = express.Router();

const {
  getAllUsers,
  forgetPassword,
  createUser,
  searchUser,
} = require("../../controllers/user.controller");
const { verify } = require("../../common/common");
router.get("/all", verify, getAllUsers);
router.post("/forget-password", forgetPassword);
router.post("/create", createUser);
router.get("/search/:searchString", verify, searchUser);

module.exports = router;
