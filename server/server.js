const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

var publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("New user connected!");

  socket.emit("newMessage", {
    from: "Jon",
    text: "Hey everyone!",
    createdAt: Date.now()
  });

  socket.on("createMessage", (message) => {
    console.log("createMessage:", message);
  });

  socket.on("disconnect", ()=> {
    console.log("Disconnected from server.");
  });
});

server.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
