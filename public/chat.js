// make a connection
var socket = io.connect("http://localhost:4000");

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');



socket.on('connect', function() {
    console.log("New user is connected!");

    socket.emit('createMessage', {
        from: "Harry",
        text: "See the data is sent to the backend!"
    });

});
socket.on('disconnect', function() {
    console.log("user  is disconnected!");

});

socket.on('newMessage', function(message) {
    console.log("New message", message);

});