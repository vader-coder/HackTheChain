//create new readFile
var fs = requrie('fs');

var content = '<html> <body> <p>Hello World</p> </body> </html>';
fs.appendFile('newfile.html', content, function (err) {
  if (err) throw err;
    console.log('Saved');
  });
