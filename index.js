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
