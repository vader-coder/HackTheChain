var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);//data must be the variable that stores the html content.
    return res.end();
  });
});
//I will use what I know to create a loop that will create webpages & modify the template.
//or maybe we should just create one that updates for each day automatically?
//https://creativecommons.org/licenses/by-sa/4.0/
//might create a slider so they can see what it looked like on a diff date.
//just 1 html file.
