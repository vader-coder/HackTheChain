//read html file.
//run: $ node demo_read_file.js
//go to http://localhost:8080/
//prints 2017 July
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();//why do we return it instead of calling it?
  });
}).listen(8080);
