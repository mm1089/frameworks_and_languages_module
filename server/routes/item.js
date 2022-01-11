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


router.get('/:itemId', cors(corsDefaultItem), function(req, res, next){
    if(Object.entries(itemObj).length == 0){
        res.status(204).send('Error: 204 - There are no items with the given ID.');
        console.log(itemObj)
        console.log('Request: ', req.method)
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
    //https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/
    //Return largest number within an array
    
    router.post('/', cors(corsDefault), function(req, res){
        const content = request.body
        //Returns the largest number for the sub-array with Math.max() method
        var findLargestItem = Math.max.apply(null,Object.entries(itemObj))
        var createNewItem = findLargestItem + 1
        console.log(content)
        console.log('Request: ', request.method)
        
        itemObj[createNewItem] = {
            id: createNewItem,
            user_id: req.body.user_id,
            description: req.body.description,
            image: req.body.image,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            keywords: req.body.keywords,
            title: req.body.title,
        }
        console.log(createNewItem)
        console.log('Request: ', request.method)
        res.status(201).json(itemObj[createNewItem])
        //else
        //res.status(405).send('Error: 405 - The post was not successful.');

        })

        //https://www.tutorialspoint.com/express-js-app-delete-method

    router.delete('/:itemId', cors(corsDefaultItem), function(req, res){
        var store = parseInt(req.params.itemId)
        //returns a boolean to specify property as its own property
        //faster method using Object.HasOwn
        if(itemObj.hasOwn(store)){
            delete itemObj[store]
            res.status(201).send('The item with the given ID was deleted successfully.');
        }
        else{
            console.log()
            res.status(404).send('Error: 404 - The item with the given ID was not found.');
        }
    })
})

//CORS preflight request?


module.exports = router