var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});
app.listen(PORT);








