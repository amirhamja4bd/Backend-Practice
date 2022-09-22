var express = require('express');
var multer = require('multer');
var multer = multer();

app=express();
app.use(multer.array());
app.use(express.static('public'));

//========================================================
//Multipart Form Data---- ( npm install --save multer )
//========================================================

app.post('/', function (req, res) {
    var JSONData= req.body;

    res.send(JSONData);
})



app.listen(8400, function(){
    console.log('Server Run Success')
})