
var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){
            
        fs.exists('demo.txt', function(result){
            if(result){
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Exists True');
                res.end();
            }
            else{
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Exists False');
                res.end();
            }

            

        });
    }

});
server.listen(6300);
console.log('Server Run Success');




//Synchronous

var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){

        let result= fs.existsSync('demo.txt');
            if(result){
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Exists True');
                res.end();
            }
            else{
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Exist False');
                res.end();
            }


    }

});
server.listen(6200);
console.log('Server Run Success');


