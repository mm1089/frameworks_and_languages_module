const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());
//use Middleware in request processing 

//load express module
//express function / app object for methods like GET POST PUT DELETE
//callback function two arguments request and response
//referred to "https://expressjs.com/en/4x/api.html"
//resource used "https://expressjs.com/en/4x/api.html#req"
//route - specify thr path or url with '/'
//callback function which is referred to as a route handler

const items = [
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'},
    {id: 3, name: 'item3'},
    {id: 4, name: 'item4'},
    {id: 5, name: 'item5'}
];

app.get('/', (req, res) => {
    res.send('FreeCycle');
});

//array of numbers used to test
app.get('/api/v2/items', (req, res) => {
    res.send(items);
});

app.get('/api/v2/items/:id', (req, res) => {
    let item = items.find(c => c.id === parseInt(req.params.id));
    if (!item) res.status(404).send('Error: 404 - The item with the given ID was not found.');
    res.send(item);
});

// Error 404 - object not found
// Error 400 - bad request

app.post('/api/v2/items', (req, res) => {
  if (!req.body.name || req.body.name.length < 1) {
      res.status(400).send('Error: 400 - Bad Request, the item entered does not meet the validation rules.')
      return;
  }

    const item = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(item);
    res.send(item);
});

// In future the ID will be assigned by a database, I have to create here
//testing reading parameter
//port handling
//if set use this, if not use 3000, store result in const
//assign a port of 3000 permanently

const portNum = process.env.portNum || 3001;
app.listen(3001, () => console.log(`'Listening on port ${portNum}... Test'`))

//encapsulating in `` allows javascript code to be used in string
//browser window shows Testing Allan Assignment on blank page
//this is working as intended
//node server.js to run