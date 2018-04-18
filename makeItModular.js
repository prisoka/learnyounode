const path = require('path')
const extension = process.argv[3];
const filterFn = require('./filtered-ls.js')

// filterFn(process.argv[2], extension, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

filterFn(process.argv[2], extension, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
