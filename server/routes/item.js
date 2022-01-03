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

router.get('/:itemId', cors(corsDefaultItem), function(req, res){
    res.send(item)
})

//Tested 03.01.22 Working as expected.
//https://prnt.sc/25uobh2
//This is a similar way to how I did it before on server.js which will have its contents spliced and moved here

//POST an item
router.post('/', cors(corsDefaultItem), function(req, res){
})
//DEL an item
router.delete('/:itemId', cors(corsDefaultItem), function(req,res){
})

module.exports = router