const fs = require('fs');
//console.log(process.argv);
const file = process.argv[2];

fs.readFile(file, function(err, contents){
  if(err){
    return console.log(err);
  }
  // file = (string) filepath of the file to read
  const lines = contents.toString().split('\n').length-1;
  console.log(lines);
})
