// Create a Web Server
// Run 'node comments.js' and open browser to http://localhost:3000/
// See console.log for output
// See browser for output

// Load the http module to create an http server.
var http = require('http');
var querystring = require('querystring');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  var query = url.parse(request.url).query;
  var name = querystring.parse(query)["name"];
  var comment = querystring.parse(query)["comment"];
  var email = querystring.parse(query)["email"];
  var website = querystring.parse(query)["website"];
  var output = "Name: " + name + "\nComment: " + comment + "\nEmail: " + email + "\nWebsite: " + website;
  console.log("Request for " + pathname + " received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(output);
  response.end();
});

// Listen on port 3000, IP defaults to
