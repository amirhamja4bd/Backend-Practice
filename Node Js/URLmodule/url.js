
//url parse kora

var http= require ('http');
var URL= require ('url');

var server = http.createServer(function(req, res){

    var myUrl = "https://www.facebook.com/search/top/?q=amir";
    var myUrlObj = URL.parse(myUrl, true);

    var myHost = myUrlObj.host;
    var myPath = myUrlObj.pathname;
    var mySearch = myUrlObj.search;

    res.writeHead(200, {'Contant-Type' : 'text/html'})
    res.write(myHost);
    res.write(myPath);
    res.write(mySearch);
    res.end();



});

server.listen(1020);
console.log("Server Run Success");