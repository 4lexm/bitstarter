var express = require('express');
var fs = require('fs');
var DATAFILE_DEFAULT = "index.html";

var fileBuffer = fs.readFileSync(DATAFILE_DEFAULT);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fileBuffer.toString('utf8', 0, fileBuffer.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
