var express     	= require('express');
var bodyParser  	= require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

var token = 0;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/getTest', function(req, res) {
	console.log("1.1 : Adding log ...");
	var query = require('url').parse(req.url,true).query;
	token = query.token;
	console.log("1.2 : Adding log ...");
  	res.status(200).json({"success": yes}); 
});

app.get('/', function(req, res) {
	console.log("Adding log ...");
  	res.status(200).json({"token": token}); 
});