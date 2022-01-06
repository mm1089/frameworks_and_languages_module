//Resources Used:
//https://expressjs.com/en/api.html
//https://expressjs.com/en/api.html#express.static
//https://expressjs.com/en/4x/api.html
//https://expressjs.com/en/4x/api.html#req
//https://expressjs.com/en/api.html#express.static


// Require the server to open on port 8000
const PORT = 8000;
var express = require('express')
/* NOT USED CURRENTLY
var cors = require('cors') 
var item = require ('../items')
*/
var router = express.Router()
var router_home = require('./routes/home')
var router_item = require ('./routes/item')
var router_items = require ('./routes/items')
var server = express()

//require item Objects from ../items
//require the express package
//require the cors package
//express.urlencoded() is required when submitting a form with post method
//as it recognizes the incoming Request Object as a string or array
//If extended is false, you can not post a "nested object" based on body-parser.
//route - specify thr path or url with '/'

server.use(express.urlencoded({ extended: false}))
server.use(express.json())
server.use('/', router_home)
server.use('/item', router_item)
server.use('/items', router_items)


//server.use(express.static('public', options))

//Express.Static is a built-in middleware function in Express
//Encapsulating in `` allows javascript code to be used in string

server.listen(
    PORT, () => console.log(`Server is open on PORT: ${PORT}`)
);

/*

Delete Method, needs work

app.delete('/delete/:item_id', (res, req)=> {
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

//Ensure server closes
process.on('SIGINT', function() {
    process.exit();
});

