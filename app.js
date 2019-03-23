const express = require('express');
const bodyParser = require('body-parser');
var http = require('http');


var server = http.createServer(app);

// Parsers for POST data
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(80);
/**
 * Create HTTP server.
 */
// const server = https.createServer(credentials,app);

/**
 * Listen on provided port, on all network interfaces.
 */
// server.listen(port, () => console.log(`API running on localhost:${port}`));