var express = require('express')
var cors = require('cors')
const itemObj = require ('../items')
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
//Tested 03.01.22 Working as expected.
//https://prnt.sc/25uobh2
//This is a similar way to how I did it before on server.js which will have its contents spliced and moved here


router.get('/:itemId', cors(corsDefaultItem), function(req, res, next){
    if(Object.keys(itemObj).length == 0){
        res.status(204).send('Error: 204 - There are no items with the given ID.');
        console.log(itemObj)
    }
    else{
        const UID = parseInt(req.params.itemId)
        if(itemObj.hasOwnProperty(UID)){
            console.log(req.params.itemId)
            const singleItem = itemObj[UID]
            res.json(singleItem)
            console.log(singleItem)
        }
        else{
            res.status(404).send('Error: 404 - The item with the given ID was not found.');
        }
    }
    //Object Keys allows me to enumerate the specified object's properties. alternative method = for loop.
    //Object.keys returns an array of the properties, print information from itemObj Object.
    //Allows me to turn an object into something that is iterable so i can use with JS functions.
    //Resources Used:
    //Object keys, values, and entries methods https://www.youtube.com/watch?v=VmicKaGcs5g
    //Object.keys vs Object.values vs Object.entries https://www.youtube.com/watch?v=3s0YFgxuOV0
    //Testing Multiple Item Objects: https://prnt.sc/25v8vua
    

})




module.exports = router