var express = require('express');
var app = express()
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');

var config = require('./config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.send('The server works!');
});

app.post('/login', function (req,res) {
	res.json({success:true});
});

app.listen(3000);
console.log('Server up at http://localhost:3000');

