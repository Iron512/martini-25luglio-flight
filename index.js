const http = require('http')
const bodyParser = require('body-parser')

http.createServer(function(req,res) {
	console.log("Got a request, fullfilling it")
	res.writeHead(200)
	res.write('Hello World!')
	res.end()
	console.log("All good")
}).listen(process.env.PORT || 80);
