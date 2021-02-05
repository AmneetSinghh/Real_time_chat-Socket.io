// make a connection
var socket = io.connect("http://localhost:4000");

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');


socket.on('connect', function() {
    console.log("Connected to Server!");
});

socket.on('disconnect', function() {
    console.log("user  is disconnected!");

});

socket.on('newMessage', function(message) {
    console.log("New message", message);
    let li = document.createElement('li');
    li.innerText = `${message.from}:${message.text}`;
    document.querySelector('body').appendChild(li);
});

document.querySelector('#submit-button').addEventListener('click', function(e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: "User",
        text: document.querySelector('input[name="message"]').value,
    }, function() {

    });
});