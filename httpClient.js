var http = require('http')

// The http.get() method is a shortcut for simple GET requests, use it to
// simplify your solution.
// The first argument to http.get() can be the URL you want to GET, provide a
// callback as the second argument.

http.get(process.argv[2], function (response) {
  // To make this a complete http get request we can add the correct encoding
  response.setEncoding('utf8')
  //assigning our event handlers to the response argument > response.on()
  response.on('data', console.log)
  response.on('error', console.error)
})

// http: is the required module for http requests.
// .get: is one http method, which is used for making requests to a server.
// The .get callback function doesn't follow the same node format that we have
// previously seen.
// .on(): assigns our event handlers.
// Its good practice to include the used encoding. You can't always get away
// with ommitting it like many people do in html documents.
