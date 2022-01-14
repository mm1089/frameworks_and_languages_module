const PORT = 8000;
var express = require('express')
var router_home = require('./routes/home')
var router_singleItem = require ('./routes/singleItem')
var router_items = require ('./routes/items')
var server = express()

//Require the server to open on port 8000
//Require item Objects from ../items
//Require the express package
//Require the cors package
//Express.urlencoded() is required when submitting a form with post method
//Route - specify the path or url with '/'

server.use(express.urlencoded({ extended: false}))
server.use(express.json())
server.use('/', router_home)
server.use('/item', router_singleItem)
server.use('/items', router_items)

//Encapsulating in `` allows javascript code to be used in string

server.listen(
    PORT, () => console.log(`Server is open on PORT: ${PORT}`)
);

//Ensure server closes
process.on('SIGINT', function() {
    process.exit();
});

//Resources Used:
//https://expressjs.com/en/api.html
//https://expressjs.com/en/api.html#express.static
//https://expressjs.com/en/4x/api.html
//https://expressjs.com/en/4x/api.html#req
//https://expressjs.com/en/api.html#express.static