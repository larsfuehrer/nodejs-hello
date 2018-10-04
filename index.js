var express = require('express');
var fs = require("fs");
var exec = require('child_process').exec;

var app = express();
var completed = false;


app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});


app.listen(8001, function() {
	console.log("Server runs on port 8001");
});
