var express = require('express')
var cors = require('cors')
var router = express.Router()

//Express Router
//require the express package
//require the cors package
//Resource Used:
//https://node-cors-client.netlify.app/
//Working Example of CORS w/ React Express
//https://expressjs.com/en/api.html#express.router
//https://expressjs.com/en/api.html#router.route 
//Working Test 03.01.22
//https://prnt.sc/25uhxg2

router.get('/', function(req, res, next) {
  res.send("Home Page for Allan's Assignment")
})

var corsOptions = {
  origin: '*',
  methods:'GET, POST, DELETE, OPTIONS',
  AllowedHeaders: 'Content-Type',
  optionsSuccessStatus: 204
}

app.listen(port, (error) => {
  if (error) {
    console.log("The server has encountered a problem: ", error);
    return;


router.options('/', cors (corsOptions))

module.exports = router;
