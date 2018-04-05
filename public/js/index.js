var socket = io();

socket.on("connect", function() {
  console.log("Connected to Server");

  socket.emit("createMessage", {
    from: "Jon",
    text: "Don't bother me fool!"
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from server.");
});

socket.on("newMessage", function(message){
  console.log("New Message:", message);
});
