
var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){

        fs.writeFile('demo.txt',"Hello Amir Hamza, This is Your Async Write", function(error){
            if(error){
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Write Error');
                res.end();
            }
            else{
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Write Success');
                res.end();
            }

        });
    }

});
server.listen(1000);
console.log('Server Run Success');


//======================
//Sync Write
//======================

var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){

        let error = fs.writeFileSync('demoSyn.txt',"Hello Amir Hamza, This is Your Sync Write File");
            if(error){
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Write Error');
                res.end();
            }
            else{
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Write Success');
                res.end();
            }
    }

});
server.listen(1001);
console.log('Server Run Success');