
var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){
        //Async.....
        fs.readFile('home.html', function(error, data){
            
            res.writeHead(200, {'Contant-Type':'text/html'});
            res.write(data);
            res.end();

        });
    }

});
server.listen(1212);
console.log('Server Run Success');


//Synchronous

var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){
            let myData = fs.readFileSync('home.html');
            res.writeHead(200, {'Contant-Type':'text/html'});
            res.write(myData);
            res.end();

    }

});
server.listen(1213);
console.log('Server Run Success');