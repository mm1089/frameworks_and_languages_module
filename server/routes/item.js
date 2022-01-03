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

var corsDefault = {
    origin: '*',
    methods:'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type'
}
//origin: Configures Access-Control-Allow-Origin CORS header
//origin * is totally safe unless that resource contains private data.
//methods: Configures Access-Control-Allow-Methods CORS header eg: GET,PUT,POST
//allowedHeaders: Configures Access-Control-Allow-Headers CORS header. eg: Content-Type,Authorization

var corsDefaultItem = {
    origin: '*',
    methods: 'GET, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type'
}

//GET an item
//This is a similar way to how I did it before on server.js which will have its contents moved here

//POST an item

//DEL an item


module.exports = router