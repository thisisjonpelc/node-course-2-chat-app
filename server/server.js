const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const {generateMessage} = require("./utils/message");
var publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("New user connected!");

  socket.emit("newMessage", generateMessage("Admin", "Welcome to the chat app!"));

  socket.broadcast.emit("newMessage", generateMessage("Admin", "A new user has joined the chat"));

  socket.on("createMessage", (message, callback) => {
    console.log("createMessage:", message);

    io.emit("newMessage", generateMessage(message.from, message.text));

    callback("This is from the server");

    // socket.broadcast.emit("newMessage", {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });

  });

  socket.on("disconnect", ()=> {
    console.log("Disconnected from server.");
  });
});

server.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
