//upload form splits address into readable parts

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'
var q = url.parse(adr, true);
var qdata = q.query;

console.log(q.host);// localhost:8080
console.log(q.pathname);// /default.htm
console.log(q.search);// ?year=2017&month=february
console.log(qdata.month);//month

http.createServer(function (req, res)) {
  res.WriteHEAD(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);
