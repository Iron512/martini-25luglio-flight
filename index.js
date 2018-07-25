const http = require('http')
const express = require('express')

var app = express()

//{code:'',departureAirport:'',arrivalAirport:'',delay:}
var flights = [
			{code:'SQ388',departureAirport:'MXP',arrivalAirport:'JFK',delay:37},
			{code:'UA928',departureAirport:'JAL',arrivalAirport:'EGS',delay:53},
			{code:'GV473',departureAirport:'RBJ',arrivalAirport:'VRE',delay:21}
			]


//homepage routing
app.get('/', function(req, res){
  res.writeHead(200);
  res.write('It works!<br>')
  res.write('require with /flights/airportCode/selector all the flights<br>')
  res.write('require with /flightInfo/flightCode all the info for that flight<br>')
  res.write('post request with /flights to insert a flight<br>')
  res.end();
});

//flight list routing
app.get('/flights/*', function(req, res){
  console.log("request on " + req.url + " - sending all flights info")
  console.log(req.url)

  res.writeHead(200);
  res.write('It works! flights')
  res.end();
});

//flight info routing
app.get('/flightInfo', function(req, res){
  res.writeHead(200);
  res.write('It works! flight Info')
  res.end();
});

//insert a flight
app.post('/flights', function(req, res){
  res.writeHead(200);
  res.write('It works! Express')
  res.end();
});

http.createServer(app).listen(process.env.PORT || 80);
