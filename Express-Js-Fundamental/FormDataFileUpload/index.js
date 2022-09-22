var express = require('express');
var multer = require('multer');
var path = require('path');

app=express();

//=================================================================
//Multipart Form Data--File upload //( npm install --save multer )
//=================================================================
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    /*
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    },
    */
    filename: function(req, file, callback){
        //Important File.png => important-file-5255.png
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                            .replace(fileExt, "")
                            .toLowerCase()
                            .split(" ")
                            .join("-") + "-" + Date.now();
        callback(null, fileName + fileExt)
      },
});
var upload = multer({storage: storage}).single('myfile');
app.post('/fileupload', function (req, res) {
    upload(req, res, function (error) {
        if(error) {
            return res.end("Error Upload File")
        }
        else {
            res.end("Successfully Uploaded File")
        }
    })
})




app.listen(8400, function(){
    console.log('Server Run Success')
})