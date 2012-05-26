var http = require('http');
var request = require('request');

var requestHandler = {};
requestHandler.handleRequest = function(req, res) {
	request("https://api.github.com/users/glennblock/repos").pipe(res);
};

http.createServer(requestHandler.handleRequest).listen(3000);
console.log('Server listening at port 3000')