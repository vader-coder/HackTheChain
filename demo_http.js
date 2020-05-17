//set up demo node.js webserver
//run: $ node demo_http.js
//go to http://localhost:8080/
var http = require('http');

/*create server object.
  req = client request. url hold url after domain name.
*/
http.createServer(function (req, res) {
  //res.write('Hello World!');//write response.
  res.writeHead(200, {'Content-Type': 'text/html'});// http://localhost:8080/foo has /foo printed.
  res.write(req.url);
  res.end(); //end response
}).listen(8080);//server obj listens to port 8080
