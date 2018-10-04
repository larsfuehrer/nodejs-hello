var express = require('express');

// Constants
var PORT = 8001;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world!\n ' + PORT);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
