
var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){
            //fs.rename(old path, new path, callBack()
        fs.rename('demoNew.txt','demo.txt', function(error){
            if(error){
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Rename Error');
                res.end();
            }
            else{
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Rename Success');
                res.end();
            }

        });
    }

});
server.listen(3100);
console.log('Server Run Success');





//Synchronous

var fs=require('fs');
var http=require('http');

var server = http.createServer(function(req,res){

    if(req.url='/'){

        let error= fs.renameSync('demoSyncNew.txt', 'demoSync.txt');
            if(error){
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Rename Fail');
                res.end();
            }
            else{
                res.writeHead(200, {'Contant-Type':'text/html'});
                res.write('File Rename Success');
                res.end();
            }

    }

});
server.listen(2100);
console.log('Server Run Success');


