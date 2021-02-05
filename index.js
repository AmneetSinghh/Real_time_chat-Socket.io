var express = require('express');
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

    socket.emit('newMessage', {
        from: 'Admin',
        text: "Welcome to the Real-Time-Chat App",
        createdAt: new Date().getTime(),
    });


    // this message to all the clients instead of me, when I connect to the server.
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: "New User Joined",
        createdAt: new Date().getTime(),
    });



    socket.on('createMessage', (message) => {
        console.log("Create-message", message);
        // io.emit for everybody, and socket.emit for the singular body. and socket.broadcast.emit for everybody except for the person itself.
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdat: new Date().getTime(),
        // });
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdat: new Date().getTime(),
        // });

    });


    socket.on('disconnect', () => {
        console.log("user was disconnected!");

    });



})