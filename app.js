var express = require('express');
var app = express();
var router = express.Router();
// var http = require('http');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/omniconnect', { useNewUrlParser: true });
console.log("Connected to database omniconnect");
var db = mongoose.connection;

var routes = require('./routes/index');

app.use('/', routes);


//Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started @ port'+app.get('port'));
});

module.exports = router;
