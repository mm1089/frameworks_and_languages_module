//Resources Used:
//https://expressjs.com/en/api.html
//https://expressjs.com/en/api.html#express.static
//https://expressjs.com/en/4x/api.html
//https://expressjs.com/en/4x/api.html#req


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

//Express.Static is a built-in middleware function in Express.
//Resources Used: https://expressjs.com/en/api.html#express.static

/*
app.use('/item/:item_id', (req, res, next) => {
    console.log('Request: ', req.method)
    next()
  })

app.get('/item/', (req, res) => {
    res.status(200);
    console.log(res.json);
    return res.json(items);
});

app.get('/items/:item_id', (req, res) => {
    {
    let items = items;
    const item_id = items.find(i => i.item_id === parseInt(req.params.item_id))
    if (!item_id) res.status(404).send('Error: 404 - The item with the given ID was not found.');

/// iSsue with item var name


    res.send(item_id);
    res.send({items});
    }
});


app.post('/item/', (req, res) => {
    const items = req.body.item;
    if (!req.body.user_id || req.body.name.length < 1){
      res.status(405).send('Error: 400 - Invalid Input, user ID entered does not meet the validation rules. Cannot be less than 1 char!')
      res.json({Error: "Invalid Inputs"})
    }

    //Image Push

    console.log("Items: ", req.body);
    res.status(200);
});


app.put('/items/:item_id', (req, res) => {
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
//encapsulating in `` allows javascript code to be used in string
server.listen(
    PORT, () => console.log(`Open on PORT: ${PORT}`)
);

//Ensure server closes
process.on('SIGINT', function() {
    process.exit();
});

