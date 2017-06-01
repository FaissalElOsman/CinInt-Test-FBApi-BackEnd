var express     	= require('express');
var bodyParser  	= require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/getTest', function(req, res) {
  	res.status(200).json({"success": yes}); 
});