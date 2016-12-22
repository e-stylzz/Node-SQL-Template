var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.port || 3005;


// routers
var routes = require('./routes/index.js');


// middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', routes);


app.listen(port, function() {
    console.log('API listening on port: ' + port);
});

module.exports = app;