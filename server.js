(function (){
    'use strict';

    var express  = require('express');
    var app      = express();                           // creating app w/ express
    //var mongoose = require('mongoose');
    var port     = process.env.PORT || 8080;
    //var database = require('./config/database');      // load the database config

    app.use(express.static(__dirname + '/public'));

    require('./app/routes.js')(app);

    app.listen(port);
    console.log("Listening on port " + port);

})();