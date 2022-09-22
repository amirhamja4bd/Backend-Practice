const express = require('express');
const multer = require('multer');
const path = require('path');

//File upload folder
const uploadFolder = "./uploads";

//Define the storage
const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, uploadFolder);
  },
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
})

//preapre the final multer upload object
const upload = multer({
  storage : storage,
  limits: {
    fileSize: 1000000 //1MB
  },
  fileFilter: function(req, file, callback) {
    if(file.fieldname === "profile"){
      if(
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png"
      ){
        callback(null, true);
      }
      else{
        callback(new Error ("Only jpg, jpeg & png allowed"));
      }
    }
    else if(file.fieldname === "resume"){
      if(file.mimetype === "application/pdf"){
        callback(null, true);
      }
      else{
        callback(new Error("Only pdf file allowed"));
      }
    }
    else{
      callback(new Error("There are unnon Error"))
    }

  },
});

app=express();

  //application router //multiple fields er jonno 
  app.post('/', upload.fields([
    {name:"profile", maxCount: 2 },
    {name:"resume", maxCount: 1 },
  ]), function(req, res){
    console.log(req.files)
    res.send('Upload Success')
  })

/*//application router //1 ta photo upload hole single besi hole array*/
// app.post('/', upload.single("profile", 2), function(req, res){
//   res.send('Success')
// });

//Default Error handler //1 ta photo upload
app.use(function(error, req, res, next){
  if(error){
    res.status(500).send(error.message);
  }
  else{
    res.send("success");
  }
});


app.listen(8500, function(){
    console.log('Server Run Success')
})
