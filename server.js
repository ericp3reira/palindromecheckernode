var express = require('express'),
    http = require('http'),
    bodyParser= require('body-parser'),
    path = require('path');

var app = express();

app.set('port', 3000);

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, '/')));

app.post('/post', function(req, res) {
  console.log('Post done: '+req.body.title);
  
  var isPalindrome = function(word) {
    var titleNorm = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    var titleRev = titleNorm.split("").reverse().join("");
    return (titleNorm === titleRev) ? 200 : 400;
  };  
  
  res.status(isPalindrome(req.body.title)).end();
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});