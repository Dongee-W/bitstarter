var express = require('express');
var app = express();
var fs = require('fs');

string = fs.readFileSync('index.html');
buf = new Buffer(string);

app.use(express.logger());

app.get('/', function(request, response) {
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
>>>>>>> staging
app.listen(port, function() {
  console.log("Listening on " + port);
});
