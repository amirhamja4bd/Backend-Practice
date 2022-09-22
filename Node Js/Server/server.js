var http= require ('http');
var port = 2020;
var hostName = '127.0.0.1'

var server = http.createServer(function(req, res){
    //res.writeHead(200, {"Content-Type":"text/html"})
    res.write("Hello Amir, ");
    res.end(" This is your first Server");
});

server.listen(port, hostName);
console.log(`Hello Amir, This is your first Server at http://${hostName}:${port}`);