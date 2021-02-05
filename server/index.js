var express = require('express');
const { generatemessage } = require('./utils/messages')

let i = 0;
var socket = require('socket.io');
// appp setup
var app = express();
var server = app.listen(4000, function() {
    console.log("Listening to request oon port 4000");
});
var io = socket(server);


// static files
app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log("New user connected!");

    socket.emit('newMessage', generatemessage('Admin', 'Welcome to the chat app'));


    // this message to all the clients instead of me, when I connect to the server.
    socket.broadcast.emit('newMessage', generatemessage('Admin', 'New User Joined'));


    // io.emit for everybody, and socket.emit for the singular body. and socket.broadcast.emit for everybody except for the person itself.

    socket.on('createMessage', (message) => {
        console.log("Create-message", message);
        io.emit('newMessage', generatemessage(message.from, message.text));
    });


    socket.on('disconnect', () => {
        console.log("user was disconnected!");

    });



})