const { response } = require('express');
const { request } = require('express');
const express = require('express');
//const items = require('./items.js');
const bodyParser = require('body-parser');
const PORT = 8000;
const app = express();
app.use(express.json());

// serve on 0.0.0.0
//load express module
//express function / app object for methods like GET POST PUT DELETE
//callback function two arguments request and response
//referred to "https://expressjs.com/en/4x/api.html"
//resource used "https://expressjs.com/en/4x/api.html#req"
//route - specify thr path or url with '/'
//callback function which is referred to as a route handler

const items = {
    id: 0,
    user_id: "michael",
    keywords:[
      "1",
      "2",
      "3"
    ],
    description: "set of 3 numbers",
    image: "https://placekitten.com/300/300",
    lat: 61.61,
    lon: 0.0,
    date_from: "2019-08-24T14:15:22Z",
    date_to: "2019-08-24T14:15:22Z"
    };

//Used to store hardcoded item data here
//Moved to ./items.js
//added back temporarily.

    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(bodyParser.json());
    app.use(express.json());


app.get('/', (req, res) => {
    console.log(res.header);
    console.log(res.json);
    res.send("FreeCycle API Implementation for Allan's assignment 2");
    res.send();
    //if (X) res.status(404).send('Error: 404 - The item was not found.');
});

app.options('/',(req, res)=>{
    res.status(204).send("ok");
});

//req - incoming
//res - outgoing

app.use('/item/:item_id', (req, res, next) => {
    console.log('Request: ', req.method)
    next()
  })

app.get('/v2/item/', (req, res) => {
    res.status(200);
    console.log(res.json);
    return res.json(items);
});

app.get('/v2/items/:item_id', (req, res) => {
    {
    let items = items;
    const item_id = items.find(i => i.item_id === parseInt(req.params.item_id))
    if (!item_id) res.status(404).send('Error: 404 - The item with the given ID was not found.');


    res.send(item_id);
    res.send({items});
    }
});

// Error 404 - object not found
// Error 400 - bad request

app.post('/v2/item/', (req, res) => {
    const items = req.body.item;
    if (!req.body.user_id || req.body.name.length < 1){
      res.status(405).send('Error: 400 - Invalid Input, user ID entered does not meet the validation rules. Cannot be less than 1 char!')
      res.json({Error: "Invalid Inputs"})
    }

    //Image Push

    console.log("Items: ", req.body);
    res.status(200);
});

// In future the ID will be assigned by a database, I have to create here

app.put('/v2/items/:item_id', (req, res) => {
    //if item doesn't exist then throw a 404
    let item_id = req.params.item_id;
    let user_id = req.body.user_id;
    let keywords = [req.body.keywords];
    let description = req.body.description;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;

    let Put = items.findIndex((createItem)=> {
        return(createItem.id == Number.parseInt(id))
    })

    console.log(item_id, req.body, Put)
    if (!id) res.status(404).send('Error: 404 - The item with the given ID was not found.');

    if(Put < 0){
        const fill = items[Put]
        items.user_id = user_id
        items.keywords = keywords
        items.description = description
        items.image = image
        items.latitude = latitude
        items.longitude = longitude
        res.json(fill)
    }
    else{
        res.status(404).send('Error: 404 - The item with the given ID was not found.');
    }
})

/*
app.delete('/v2/delete/:item_id', (res, req)=> {
    let id = req.params.id;
    let index = items.findIndex((createItem)=> {
        return createItem.id === Number.parseInt(id)
    })
    if(server >= 0){
        let xxx = createItem[server] //is this right? server.js could be index
        xxx.splice(server, 1)
    }
    else{
        res.status(404).send('Error: 404 - The item with the given ID was not found.'); 
    }
})
*/

//port handling
//if set use this, if not use 3000, store result in const
//assign a port of 3000 permanently

app.listen(
    PORT, () => console.log(`Open on PORT: ${PORT}`)
);


//encapsulating in `` allows javascript code to be used in string
//browser window shows Testing Allan Assignment on blank page
//this is working as intended
//node server.js to run
