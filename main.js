var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/home.html');
});

app.get("/home", function(req, res) {
	res.sendFile(__dirname + '/home.html');
});

app.get("/cards", function(req, res) {
	res.sendFile(__dirname + '/cards.html');
});

app.get("/music", function(req, res) {
	res.sendFile(__dirname + '/music.html');
});

app.get("/gaming", function(req, res) {
	res.sendFile(__dirname + '/gaming.html');
});

app.get("/luxury", function(req, res) {
	res.sendFile(__dirname + '/luxury.html');
});

app.get("/education", function(req, res) {
	res.sendFile(__dirname + '/education.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
