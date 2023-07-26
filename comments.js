// Create web server
// Run: node comments.js
// Test: curl -i http://localhost:3000/comments
// Test: curl -i http://localhost:3000/comments/1
// Test: curl -i -X POST -H 'Content-Type: application/json' -d '{"body":"Hello World"}' http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

// Setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup routes
var router = express.Router();

// Middleware for all requests
router.use(function(req, res, next) {
  console.log('Request received');
  next();
});

// GET /comments
router.get('/comments', function(req, res) {
  res.json({ message: 'GET /comments' });
});

// GET /comments/:id
router.get('/comments/:id', function(req, res) {
  res.json({ message: 'GET /comments/:id' });
});

// POST /comments
router.post('/comments', function(req, res) {
  res.json({ message: 'POST /comments' });
});

// Register routes
app.use('/', router);

// Start server
app.listen(port);
console.log('Server listening on port ' + port);