//set up demo node.js webserver
//run: $ node module_test.js
//go to http://localhost:8080/
//prints 2017 July
var http = require('http');//http module
var dt = require('./demo_module');//import module.

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Date & Time: ' + dt.myDateTime());//write response.
  res.write('\nSeeing if enter works');
  res.end()
}).listen(8080);//server obj listens to port 8080

//set up event listeners? this just seems to happen when create server.
//I want to load an html page.
