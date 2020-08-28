let express = require("express");
let router = express.Router();

const authentication = require("./api/authentication.routes");
router.use("/authentication", authentication);

router.get("/test", (req, res) => {
  res.json({
    test: "test",
  });
});

module.exports = router;
