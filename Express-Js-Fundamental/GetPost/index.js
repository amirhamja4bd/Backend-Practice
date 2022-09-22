var express = require('express');

app=express();


//Simple Get Method
app.get("/simple", function(req, res){
    res.end("This is Simple Get Method")
})

//Get Method with url query.............
app.get("/", function(req, res){
    let fName = req.query.fName;
    let lName = req.query.lName;

    res.end(fName + " " + lName);
})

//Get Method with Header query..........
app.get("/header", function(req, res){
    let fName = req.header("fName");
    let lName = req.header("lName");
    
    // let UserAgent = req.header("User-Agent");
    // res.end(UserAgent);

    res.end(fName + " " + lName);
    
})

//==============POST method===========

//Simple post Method
app.post("/simple", function(req, res){
    res.end("This is Simple Get Method")
})

//post Method with url query.............
app.post("/", function(req, res){
    let fName = req.query.fName;
    let lName = req.query.lName;

    res.end(fName + " " + lName);
})

//Post Method with Header query..........
app.post("/headerpost", function(req, res){
    let userName = req.header("userName");
    let password = req.header("password");
    
    // let UserAgent = req.header("User-Agent");
    // res.end(UserAgent);

    res.end("User Name:" + " " + userName + " "+ "password:" + " " + password);
    
})






app.listen(8200, function(){
    console.log('Server Run Success')
})