var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var buffer = new Buffer(fs.readFileSync('./index.html'));
app.get('/', function(request, response) {
  //response.send('Hello World2!');
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
