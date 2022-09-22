var http= require ('http');

var server = http.createServer(function(req, res){

    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is Our Home Page</h1>');
        res.end();
    }
    
    else if(req.url==="/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is Our About Page</h1>');
        res.end();
    }
    
    else if(req.url==="/portfolio"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is Our Portfolio Page</h1>');
        res.end();
    }

    else if(req.url==="/contact"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is Our Contact Page</h1>');
        res.end();
    }


});

server.listen(3020);
console.log("Hello Amir hamza, Your server is successfully created");