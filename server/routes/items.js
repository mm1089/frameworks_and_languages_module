var itemObj = require ('../items')
var express = require('express')
var cors = require('cors')
var router = express.Router()

//Require ./Items
//Require the Express package
//Require the CORS package
//CORS NPM package is used for solving the CORS policy issue in express.js

//      CORS SETUP      //

var corsOptions = {
    origin: '*',
    methods:'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type'
}

//      GET REQUEST FOR ALL ITEMS       //
//Object Entries are used to return an array of items that are enumerable
//If Array Length Less than or Equal to 0 send error
//For loop to get items from array
//Resolve json
router.get('/', cors(corsOptions), function(req, res){
    var converted = []
    for (let [retrieve, objectValues] of Object.entries(itemObj)) {
        converted.push(objectValues);
    }
    if(Object.keys(converted).length <= 0){
    res.status(204).send('Error: 204 - No Items found.');
    }
    else{
    res.status(200).json(converted)
    console.log(req.method, ('ALL ITEMS REQUEST'))
}

})

module.exports = router

//Resource Used:
//https://javascript.info/keys-values-entries
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
//https://www.npmjs.com/package/cors
//https://www.youtube.com/watch?v=PNtFSVU-YTI