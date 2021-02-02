// make a connection
var socket = io.connect("http://localhost:4000");

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

console.log(messages, form, input);
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});