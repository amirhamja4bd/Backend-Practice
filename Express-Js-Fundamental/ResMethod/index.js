//Routing.................................
var express = require('express');

app=express();

app.get("/", function(req, res){
    res.send('This is My Home Page');
});
app.post("/About", function(req, res){
    res.send('This is My About Page');
});
app.put("/portfolio", function(req, res){
    res.send('This is My Portfolio Page');
});
app.delete("/contact", function(req, res){
    res.send('This is My Contact Page');
});

app.listen(8000, function(){
    console.log('Server Run Success')
})