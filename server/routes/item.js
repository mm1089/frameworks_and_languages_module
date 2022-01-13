var express = require('express')
var cors = require('cors')
const itemObj = require ('../items')
const items = require('../items')
var router = express.Router()
const port = 8000

//require hardcoded items
//require the express package
//require the cors package
//Resources Used: 
//https://www.npmjs.com/package/cors
//https://www.youtube.com/watch?v=PNtFSVU-YTI
//Cross-Origin Resource Sharing (CORS) Default Setup
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405

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


router.get('/:itemId', cors(corsDefaultItem), function(req, res){
    var empty = Object.entries(itemObj).length == 0;
    if(empty){
        res.status(204).send('Error: 204 - There are no items with the given ID.');
        console.log(itemObj)
        console.log('Request: ', req.method)
    }

    //Object Keys allows me to enumerate the specified object's properties. alternative method = for loop.
    //Object.keys returns an array of the properties, print information from itemObj Object.
    //Allows me to turn an object into something that is iterable so i can use with JS functions.
    //Resources Used:
    //Object keys, values, and entries methods https://www.youtube.com/watch?v=VmicKaGcs5g
    //Object.keys vs Object.values vs Object.entries https://www.youtube.com/watch?v=3s0YFgxuOV0
    //Testing Multiple Item Objects: https://prnt.sc/25v8vua
    //https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/
    //Return largest number within an array
    //https://stackoverflow.com/questions/20784046/get-max-value-from-javascript-dictionary-object
    //Find max Index in the dictionary of items.
    
    router.post('/', cors(corsDefault), function(req, res){
        var MaxID = parseInt(Object.entries(items).reduce((a, b) => items[a] > items[b] ? a : b)) + 1;
        var createID = maxIndex + 1
        const createItem =
        {
            id: createID,
            user_id: req.body.user_id,
            description: req.body.description,
            image: req.body.image,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            keywords: req.body.keywords,
            title: req.body.title,
            date_from: new Date(),
            date_to: new Date(),
        }
        res.status(201).send('Post Created Successfully.')
        console.log('Request: ', request.method)

        if (!newItem.user_id || !newItem.keywords || !newItem.description || !newItem.latitude || !newItem.longitude || !newItem.title) {
            return res.status(405).send('Error: 405 - The post was not successful.');
        }
        else{
        itemObj[createItem.id] = createItem
        return res.status(201).send("Item successfully created.")
        }
    })

        //https://www.tutorialspoint.com/express-js-app-delete-method

    router.delete('/:itemId', cors(corsDefaultItem), function(req, res){
        var empty = Object.entries(itemObj).length == 0
        if (empty) {
            return res.status(200).send('The item with the given ID was not found.');
        }
        //returns a boolean to specify property as its own property
        else{
            console.log()
            res.status(404).send('Error: 404 - The item with the given ID was not found.');
        }
    })
})

//CORS preflight request?
// https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function () {
    process.exit();
  });


module.exports = router