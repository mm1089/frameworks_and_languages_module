const { response } = require('express');
const express = require('express');
const items = require('./items');
const PORT = 3000;
const JOI = require('joi');
const app = express();

app.use(express.json());
//use Middleware in request processing 

//Used to store hardcoded item data here
//Moved to ./items.js

//load express module
//express function / app object for methods like GET POST PUT DELETE
//callback function two arguments request and response
//referred to "https://expressjs.com/en/4x/api.html"
//resource used "https://expressjs.com/en/4x/api.html#req"
//route - specify thr path or url with '/'
//callback function which is referred to as a route handler

app.get('/', (req, res) => {
    res.send('FreeCycle');
});

//req - incoming
//res - outgoing
//array of numbers used to test

app.get('/v2/item', (req, res) => {
    res.status(200);
    res.send({items});
});

app.get('/v2/item/:id', (req, res) => {
    const id = items.find(i => i.id === parseInt(req.params.id));
    if (!id) res.status(404).send('Error: 404 - The item with the given ID was not found.');
    res.send(id);
});

// Error 404 - object not found
// Error 400 - bad request

app.post('/v2/items', (req, res) => {
  if (!req.body.user_id || req.body.name.length < 1) {
      res.status(400).send('Error: 400 - Bad Request, user ID entered does not meet the validation rules. Cannot be less than 1 char!')
      return;
  }
    const createItem = {
        id: items.length + 1,
        user_id: req.body.name,
        keywords: [req.body.keywords],
        description: req.body.description,
        image: req.body.image,
        latitude: require.body.latitude,
        longitude: require.body.longitude
    };
    items.push(createItem);
    res.send(createItem);
});

// In future the ID will be assigned by a database, I have to create here

app.put('/v2/items/:id', (req, res) => {
    let id = req.params.id;
    let user_id = req.body.user_id;
    let keywords = [req.body.keywords];
    let description = req.body.description;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;

    
    let put = items.findIndex((createItem)=> {
        return(createItem.id == Number.parseInt(id))
    })
    if (!id) res.status(404).send('Error: 404 - The item with the given ID was not found.');

    if(put < 0){
        const xxx = items[put]
        items.user_id = user_id
        items.keywords = keywords
        items.description = description
        items.image = image
        items.latitude = latitude
        items.longitude = longitude
        res.json(items)
    }
    else{
        res.status(404).send('Error: 404 - The item with the given ID was not found.');
    }
})


app.delete('/v2/delete/:id', (res, req)=> {
    let item_id = req.params.id;
    let index = items.findIndex((createItem)=> {
        return createItem.id === Number.parseInt(id)
    })
    if(index >= 0){
        let xxx = createItem[index]
        xxx.splice(index, 1)
    }
    else{
        res.status(404).send('Error: 404 - The item with the given ID was not found.'); 
    }
})

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
