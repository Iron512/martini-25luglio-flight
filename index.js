const http = require('http')
const express = require('express')

var app = express()

app.get('/', function(req, res){
  res.writeHead(200);
  res.write('It works! Express')
  res.end();
});

http.createServer(app).listen(process.env.PORT || 80);
