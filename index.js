var express = require('express');
let i = 0;
var socket = require('socket.io');
// appp setup
var app = express();
var server = app.listen(4000, function() {
    console.log("Listening to request oon port 4000");
});

// static files
app.use(express.static('public'));


// socket setup
// this paratmeter takes hte server that we are working with
var io = socket(server);

// when particular client connect , it makes a socket connection
io.on('connection', function(socket) {
    socket.on('chat message', (msg) => {
        console.log(i);
        io.emit('chat message', msg);
        ++i;

    });
})