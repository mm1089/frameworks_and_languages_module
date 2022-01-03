var express = require('express')
var cors = require('cors')

var router = express.Router()
//Express Router
//require the express package
//require the cors package
//Resource Used: https://www.npmjs.com/package/cors -- CORS SETUP
//https://www.youtube.com/watch?v=h-WtIT6gCBk -- CORS 
//https://node-cors-client.netlify.app/ Working Example of CORS w/ React Express
//
//https://expressjs.com/en/api.html#express.router -- ROUTER
//https://expressjs.com/en/api.html#router.route //ROUTING ROUTER.

router.get('/', function(req, res, next) {
  res.send("Home Page for Allan's Assignment")
})

var corsOptions = {
  origin: '*',
  methods:'GET, POST, DELETE, OPTIONS',
  AllowedHeaders: 'Content-Type',
  optionsSuccessStatus: 204
}


router.options('/', cors (corsOptions))

module.exports = router;
