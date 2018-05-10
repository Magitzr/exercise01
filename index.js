const express = require('express');
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

// create express app
const expressObj = express();

// parse requests of content-type - application/x-www-form-urlencoded
expressObj.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
expressObj.use(bodyParser.json())
//mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
// define a simple route
expressObj.get('/api/v1', (req, res) => {
    res.json({"message": "My user application...."});
});
// Require books routes
require('./app/routes/UserRoutes.js')(expressObj);
// listen for requests
expressObj.listen(3000, () => {
    console.log("Server is listening on port 3000");
});