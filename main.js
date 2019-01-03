var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/home.html');
});

app.get("/cards", function(req, res) {
	res.sendFile(__dirname + '/cards.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
