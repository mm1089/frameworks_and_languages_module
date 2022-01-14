var express = require('express')
var cors = require('cors')
var router = express.Router()

//    SETUP   //
//Require the Express package
//Require the CORS package

//    CORS SETUP    //

var corsOptions = {
  origin: '*',
  methods:'GET, POST, DELETE, OPTIONS',
  AllowedHeaders: 'Content-Type',
  optionsSuccessStatus: 204
}

//    GET REQUEST DEFAULT   //

router.get('/', function(req, res, next) {
  res.send("Home Page for Allan's Assignment")
})


//    CORS OPTIONS    //
//CORS requests can be ‘complex’ and require an OPTIONS request (pre-flight request)
router.options('/', cors (corsOptions))
module.exports = router;

//Resources Used:
//https://node-cors-client.netlify.app/
//https://expressjs.com/en/api.html#express.router
//https://expressjs.com/en/api.html#router.route