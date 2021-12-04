const express = require('express');
const app = express();

//load express module
//express function / app object for methods like GET POST PUT DELETE
//callback function two arguments request and response
//referred to "https://expressjs.com/en/4x/api.html"
//resource used "https://expressjs.com/en/4x/api.html#req"
//route - specify thr path or url with '/'
//callback function which is referred to as a route handler

const testing = [
    {id: 1, name: 'test1'},
    {id: 2, name: 'test2'},
    {id: 3, name: 'test3'},
    {id: 4, name: 'test3'},
    {id: 5, name: 'test3'}
];

app.get('/', (req, res) => {
    res.send('Testing Allan Assignment');
});

//array of numbers used to test
app.get('/api/test', (req, res) => {
    res.send(testing);
});

app.get('/api/test/:id', (req, res) => {
    let = test.find(c => c.id === parseInt(req.params.id))
});

//testing reading parameter
//port handling
//if set use this, if not use 3000, store result in const
//assign a port of 3000 permanently

const portNum = process.env.portNum || 3000;
app.listen(3000, () => console.log(`'Listening on port ${portNum}... Test'`))

//encapsulating in `` allows javascript code to be used in string
//browser window shows Testing Allan Assignment on blank page
//this is working as intended
//node app.js to run