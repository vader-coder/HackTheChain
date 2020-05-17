//create new readFile
var fs = require('fs');
//I could use what I am learning here for my SIR project.
//appends to a file, creates a new one if doesn't exist.
//this might be how you get your project to work. have a default one & fill in data.
var content = '<html> <body> <p>Hello World</p> </body> </html>';
fs.appendFile('newfile.html', content, function (err) {
  if (err) throw err;
    console.log('Saved');
  });
//fs.unlink('mynewfile2.txt', function (err) { } deletes a file.
//replaces a specified files conent.
//fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {

//renames a file.
//fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
