var http = require('http');
var request = require('request');

var port = process.env.PORT || 3000;

var requestHandler = {};
requestHandler.handleRequest = function(req, res) {
	request("https://api.github.com/users/glennblock/repos").pipe(res);
};

http.createServer(requestHandler.handleRequest).listen(port);
console.log('Server listening at port 3000')