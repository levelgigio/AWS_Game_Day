const express = require('express');
const bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

const app = express();


// var server = http.createServer(app);

// Parsers for POST data
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(80, ()=>{
  console.log('Listening on port 20000');
});
/**
 * Create HTTP server.
 */
// const server = https.createServer(credentials,app);

/**
 * Listen on provided port, on all network interfaces.
 */
// server.listen(port, () => console.log(`API running on localhost:${port}`));
