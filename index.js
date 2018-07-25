const http = require('http')
const express = require('express')

var app = express()

//{code:'',departureAirport:'',arrivalAirport:'',delay:}
var flights = [
			{code:'SQ388',departureAirport:'MXP',arrivalAirport:'JFK',delay:37},
			{code:'UA928',departureAirport:'JAL',arrivalAirport:'EGS',delay:53},
			{code:'GV473',departureAirport:'RBJ',arrivalAirport:'VRE',delay:21},
			{code:'UL871',departureAirport:'MXP',arrivalAirport:'EGS',delay:21}
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

  var splitted = req.url.split("/");

  if (splitted.length != 4) {
  	res.writeHead(400)
  	res.write("bad request - wrong url form")
  	res.end()
  } else {
  	//well formed request
  	airportCode = splitted[2]
  	selector = splitted[3]

  	var list = getFlights(airportCode,selector)

  	//fix
	res.writeHead(200)
	res.body.write(list)
	res.end()

  }
});

//flight info routing
app.get('/flightInfo/*', function(req, res){
  console.log("request on " + req.url + " - sending flight info")
  console.log(req.url)

  var splitted = req.url.split("/");

  if (splitted.length != 3) {
  	res.writeHead(400)
  	res.write("bad request - wrong url form")
  	res.end()
  } else {
  	//well formed request
  	code = splitted[2]


  	var obj = getFlightInfo(code)

  	if (obj != -1) {
		res.writeHead(200)
		res.write("XD")
		res.end()
  	} else {
  		res.writeHead(404)
		res.write("flight not found")
		res.end()
  	}
  }
});

//insert a flight
app.post('/flights', function(req, res){
  res.writeHead(200);
  res.write('It works! Express')
  res.end();
});

http.createServer(app).listen(process.env.PORT || 80);



//functions
function getFlights(airportCode,selector) {
  	var list = []

	if (selector == "departure") {
  		//departure

		for (var i = flights.length - 1; i >= 0; i--) {
			if (flights[i].departureAirport == airportCode) {
				list.push(flights[i].code)
			}
		}
  	} else if (selector == "arrival") {
  		//arrival

		for (var i = flights.length - 1; i >= 0; i--) {
			if (flights[i].arrivalAirport == airportCode) {
				list.push(flights[i].code)
			}
		}

  	} else {
  		//wrong selector
  		var list = [-1]
  	}

  	return list
}

function getFlightInfo(codeS) {
	var found = -1

	for (var i = flights.length - 1; i >= 0; i--) {
		if (flights[i].code == codeS) {
			found = i
		}
	}

	if (found == -1) {
		return -1
	} else {
		return {
			departureAirport: flights[found].departureAirport,
			arrivalAirport: flights[found].arrivalAirport,
			delay: flights[found].delay

		}
	}
}
