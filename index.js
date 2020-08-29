const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const bodyParser = require("body-parser");

//custom module
const config = require("./services/config");
const { verify_token } = require("./services/common/common");
require("./services/models/db//mongo");

//middleware
app.use(verify_token);
app.use(express.static(path.join(__dirname, "app/build")));
app.use(bodyParser.json());
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

// // web-app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/app/build", "", "index.html"));
});

var users = [];
io.on("connection", (socket) => {
  socket.on("setUser", (id) => {
    socket.join(id);
    users.push({ id, socketId: socket.id });
  });
  socket.on("chat", ({ to_id, payload }) => {
    let user = users.filter((user) => user.id == to_id);
    console.log(payload, user);

    io.to(user[0].id).emit("sendChat", payload);
  });
  socket.on("disconnect", (data) => {
    console.log(socket.id);
  });
});

app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 400).json({
    error: {
      message: error.message,
    },
  });
});

//server
server.listen(config.httpPort, () => {
  console.log(config.httpPort);
});
