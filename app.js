var http = require('http');
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var cors = require('cors');
var expressValidator = require('express-validator');
var moment = require('moment');

var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var settings = require('./settings');
var RedisStore = require('connect-redis')(session);

//var cloudant = require('./cloudant.js');
//var settings = require('./settings.js');

var app = express();
var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');

//jscs:disable maximumLineLength

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//allow CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Routes/Controllers for the views
require('./routes')(app);


//var nano = cloudant.nano;
//var docs = nano.use('blue-teamscore');

//routes
app.get('/', function(req, res) {
  res.send('welcome to weather light control >:D');
});

//jscs:disable maximumLineLength

app.listen(port);
