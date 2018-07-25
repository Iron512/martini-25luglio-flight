const http = require('http')
const bodyParser = require('body-parser')

http.createServer(function(req,res) {
	var URL = req.url

	res.writeHead(200)
	res.write('Hello World!')
	res.end()


}).listen(process.env.PORT || 80);
