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
    //res.send("Get all items");
    var getItemsArray = []
    for (let [key, objectValues] of Object.entries(item)) {
    getItemsArray.push(objectValues);
    }
    //used to return an array of items that are enumerable
    //Resource Used: https://javascript.info/keys-values-entries
    if(Object.keys(getItemsArray).length <= 0){
    res.status(204).send('Error: 204 - No Items found.');
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
    }
    else{
    //response is good
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
    res.status(200).json(getItemsArray)
}

})


module.exports = router