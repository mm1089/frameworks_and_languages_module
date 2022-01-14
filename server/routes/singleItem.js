const itemObj = require ('../items')
var express = require('express')
var cors = require('cors')
var router = express.Router()

//Require ./Items
//Require the Express package
//Require the CORS package

//      CORS SETUP        //
//Origin * is safe unless Item Object resource contains private data.
//Methods: Configures Access-Control-Allow-Methods CORS header eg: GET,PUT,POST
//AllowedHeaders: Configures Access-Control-Allow-Headers CORS header. eg: Content-Type,Authorization

    var corsOptions = {
        origin: '*',
        methods:'GET, POST, OPTIONS',
        allowedHeaders: 'Content-Type'
    }

    var corsOptionSingle = {
        origin: '*',
        methods: 'GET, DELETE, OPTIONS',
        allowedHeaders: 'Content-Type'
    }

//      GET REQUEST       //
//Get an individual item from ./Items
//If The Item Object is empty send an error
//Else check item has own Property
//Search Items Dictionary to find specific ID

    router.get('/:itemId', cors(corsOptionSingle), function(req, res){
        if(Object.keys(itemObj).length == 0){
            res.status(204).send("Item does not exist")
          }
          else{
            const store = parseInt(req.params.itemId)
            if(itemObj.hasOwnProperty(store)) {
              var item = itemObj[store];
              res.json(item);
            }
            else{
              res.status(404).send("The Item with the given ID was not found.")
            }
          }

//      POST REQUEST        //
//Create an Item
//Object Entries allows me to enumerate the Object's properties.
//Find The Maximum Index within the dictionary of items in order to create a new higher Index.
//Create a New Item object with all Parameters listed
//Check If the New Item object is not missing any of the specified fields
//Else Create new item object and send response of successful creation
    
    router.post('/', cors(corsOptions), function(req, res){
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

        if (!newItem.user_id || !newItem.keywords || !newItem.description || !newItem.latitude || !newItem.longitude || !newItem.title) {
            return res.status(405).send('Error: 405 - The post was not successful.');
        }
        else{
        itemObj[createItem.id] = createItem
        return res.status(201).send("Item successfully created.")
        }
    })

//      DELETE REQUEST      //
//Check if Object is Empty If it is send an error
//NOT FINISHED

    router.delete('/:itemId', cors(corsOptionSingle), function(req, res){
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

//    CORS OPTIONS    //
//CORS requests can be ‘complex’ and require an OPTIONS request (pre-flight request)
router.options("/", cors(corsOptions));
router.options("/:itemId", cors(corsOptionSingle));
module.exports = router

//Resources Used: 
//https://www.npmjs.com/package/cors
//https://www.youtube.com/watch?v=PNtFSVU-YTI
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
//https://www.tutorialspoint.com/express-js-app-delete-method
//https://stackoverflow.com/questions/20784046/get-max-value-from-javascript-dictionary-object
//https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/
//https://www.youtube.com/watch?v=3s0YFgxuOV0 Object keys, Object.values, Object.entries
//https://www.youtube.com/watch?v=VmicKaGcs5g
