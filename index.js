const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
const io = require("socket.io")(server);

//custom module
const config = require("./services/config");
require("./services/models/db//mongo");

//middleware
app.use(express.static(path.join(__dirname, "app/build")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header({
    "Access-Control-Allow-Credentials": true,
  });
  if (req.headers.origin) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  next();
});

// api
const api = require("./services/routes/api.route");
app.use("/api", api);

// web-app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "app/build", "", "index.html"));
});

//server
server.listen(config.httpPort, () => {
  console.log(config.httpPort);
});
