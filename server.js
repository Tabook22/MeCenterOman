//***************************************************************************** */
// The above code sets up a simple express app, with an /api route and all other
// routes are directed towards the dist/index.html page.
// This catch all route, denoted with *, MUST come last after all other API routes
// have been defined.

// The /api route points to a file ./server/routes/api.js.
//****************************************************************************** */


// Get dependencies
const express=require('express');
const bodyParser =require('body-parser');
const http = require('http');
const path=require('path');

// Get our API routes
const api=require('./server/routes/api');

const app=express();

// Point static path to dist
app.use(express.static(path.join(__dirname,'dist')));

// Parsers for POST data
app.use(bodyParser.urlencoded({extended:true})); // Parses the text as url eoncoded data
app.use(bodyParser.json()); // This parses the text as json

// Set our api routes
app.use('/api',api);

// Catch all other routes and return the index file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
