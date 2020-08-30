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
const { saveMessages } = require("./services/services/messages.services");
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
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
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

io.on("connection", (socket) => {
  socket.on("setUser", (id) => {
    socket.join(id);
  });
  socket.on("chat", ({ to_id, payload }) => {
    console.log(payload, to_id);
    io.to(to_id).emit("sendChat", payload);
    saveMessages({
      sender_id: payload.sender_id,
      reciver_id: payload.reciver_id,
      message: payload.message,
    });
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
