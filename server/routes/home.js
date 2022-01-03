//Attempting Routes
var express = require('express')
var cors = require('cors');
var app = express()

//require the express package
//require the cors package
//Resource Used: https://www.npmjs.com/package/cors

var corsOptions = {
  origin: '*',
  methods:'GET, POST, DELETE, OPTIONS',
  AllowedHeaders: 'Content-Type',
  optionsSuccessStatus: 204
}

//The HTTP 200 OK success status response code indicates that the request has succeeded.

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})
 
app.listen(8000, function () {
  console.log('CORS-enabled web server listening on port 80')
})
