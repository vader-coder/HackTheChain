//set up demo node.js webserver
//run: $ node demo_http.js
//go to http://localhost:8080/ 
var http = require('http');

//create server object.
http.createServer(function (req, res) {
  res.write('Hello World!');//write response.
  res.end(); //end response
}).listen(8080);//server obj listens to port 8080

