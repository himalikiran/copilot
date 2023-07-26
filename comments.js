// Create Web Server
// 1. Import express
const express = require('express');
// 2. Create an express object
const app = express();
// 3. Define a port
const port = 3000;
// 4. Create a web server
app.listen(port, function() {
    console.log('Server listening on port ' + port);
});

// Create a route for '/' and send 'Hello World' to the client
app.get('/', function(req, res) {
    res.send('Hello World');
});

// Create a route for '/comments' and send an array of comments to the client
app.get('/comments', function(req, res) {
    res.send(comments);
});

// Create a route for '/comments/:id' and send a single comment object to the client
app.get('/comments/:id', function(req, res) {
    res.send(comments[req.params.id]);
});

// Create an array of comment objects
let comments = [
    { body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tellus vitae dolor lobortis ultricies. Nullam quis rutrum tellus, id egestas ipsum. Nulla facilisi. Quisque eget enim vitae urna tincidunt luctus. Nulla facilisi. Sed sit amet felis ut nisl vulputate tempus. Sed sed scelerisque dolor. Aenean nec faucibus quam, non tempus urna. Sed eget eros auctor, pellentesque nunc vel, facilisis velit. Sed at turpis quis orci pulvinar feugiat. Suspendisse potenti. Phasellus sed justo auctor, venenatis massa vel, ullamcorper risus. Nunc tempus nunc vitae fermentum porta. Morbi euismod, sem ac mattis ultricies, nunc nisl vulputate tellus, vitae egestas nunc nibh vitae nisl. Ut ac dolor euismod, pharetra enim quis, porta enim. Quisque sed mauris ut lacus ultricies pellentesque.',
      username: 'anonymous',
      postId: '1'
    },
    { body: 'Suspendisse potenti. Cras mollis, velit et aliquet lacinia, odio purus pulvinar nisi, sed aliquam leo augue ut ante. Donec sit amet eros sem. Ut at justo'}]