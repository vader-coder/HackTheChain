//set up demo node.js webserver
//run: $ node demo_http.js
//go to http://localhost:8080/?year=2017&month=July
//prints 2017 July
var http = require('http');//http module
var url = require('url');//url module can split query string into componets
/*create server object.
  req = client request. url hold url after domain name.
*/
http.createServer(function (req, res) {
  //res.write('Hello World!');//write response.
  var query = url.parse(req.url, true).query;
  var txt = query.year + " " + query.month;
  res.end(txt)
}).listen(8080);//server obj listens to port 8080

//set up event listeners? this just seems to happen when create server.
//I want to load an html page. 
