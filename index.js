var express = require('express');

// appp setup
var app = express();
var server = app.listen(4000, function() {
    console.log("Listening to request oon port 4000");
});

// static files
app.use(express.static('public'));