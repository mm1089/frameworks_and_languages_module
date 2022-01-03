var express = require('express')
var cors = require('cors')
var item = require ('../items')
var router = express.Router()

//require hardcoded items
//require the express package
//require the cors package
//Resources Used: 
//https://www.npmjs.com/package/cors
//https://www.youtube.com/watch?v=PNtFSVU-YTI
//Cross-Origin Resource Sharing (CORS) Default Setup
//CORS package is used for solving the CORS policy issue in express.js

var corsDefault = {
    origin: '*',
    methods:'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type'
}

//GET req

router.get('/', cors(corsDefault), function(req, res){
})


module.exports = router