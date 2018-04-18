// Create a program that prints a list of files in a given directory,
// filtered by the extension of the files. You will be provided a directory
// name as the first argument to your program (e.g. '/path/to/dir/') and a
// file extension to filter by as the second argument.
//
// For example, if you get 'txt' as the second argument then you will need to
// filter the list to only files that end with .txt. Note that the second
// argument will not come prefixed with a '.'.
//
// Keep in mind that the first arguments of your program are not the first
// values of the process.argv array, as the first two values are reserved for
// system info by Node.
//
// The list of files should be printed to the console, one file per line. You
// must use asynchronous I/O.

const fs = require('fs')
const path = require('path');
const extension = process.argv[3];

// fs.readdir(process.argv[2], function (err, list) {
//   for (let i = 0; i < list.length; i++) {
//     if (path.extname(list[i]) === '.' + extension) {
//       console.log(list[i]);
//     }
//   }
// })

//DRY: do not repeat yourself;
module.exports = function (dir, extension, callback) {
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err);
    list = list.filter(function (file) {
      return path.extname(file) === ('.' + extension);
    })
    return callback(null, list)
  })
}
