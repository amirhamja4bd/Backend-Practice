
var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){
            //fs.unlink(path, callBack()
        fs.unlink('demo.txt', function(error){
            if(error){
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Delete Fail');
                res.end();
            }
            else{
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Delete Success');
                res.end();
            }

            

        });
    }

});
server.listen(3000);
console.log('Server Run Success');



//Synchronous

var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){

        let error= fs.unlinkSync('demo.txt');
            if(error){
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File unlink Fail');
                res.end();
            }
            else{
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File unlink Success');
                res.end();
            }


    }

});
server.listen(6100);
console.log('Server Run Success');


