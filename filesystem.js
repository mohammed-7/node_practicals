// for appending the file
const { log } = require('console');
var fs = require('fs');
fs.appendFile('mynewfile.txt', 'I am appending the text file.', function (err) {
  if (err) throw err;
  console.log('content is appended');
});
