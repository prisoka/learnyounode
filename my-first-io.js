var fs = require('fs');
let whatever = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;
console.log(whatever);
