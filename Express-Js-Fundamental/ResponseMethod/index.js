var express = require('express');

app=express();

//=================================
//Simple String Response
//=================================

app.get("/one", function(req, res){
    res.send('Simple String Response');
});
app.post("/two", function(req, res){
    res.send('Simple String Response');
});

//Response Status code ....................
app.post("/three", function(req, res){
    res.status(401).send('Unauthorized');
});

//Response Json Array.......................
let myJsonArray=[
    {
        Name:"Amir",
        Roll:"1",
        Occupation:"Student"
    },
    {
        Name:"Parvej",
        Roll:"2",
        Occupation:"Student"
    },
    {
        Name:"Rayhan",
        Roll:"3",
        Occupation:"Student"
    }
]
app.get("/four", function(req, res){
    res.json(myJsonArray);
});

//Response Download .......................
app.get("/five", function(req, res){
    res.download("./image/mern.png");
});

//Response redirect.........................
app.get("/bangladesh", function(req, res){
    res.redirect("http://localhost:8100/india");
});
app.get("/india", function(req, res){
    res.send("Hello Redirecting");
});

//response headers a show koranor jonno ............
app.get("/six", function(req, res){

    res.append("Name", "Amir Hamza")
    res.append("City", "Dhaka")
    res.append("Age", "22 Years old")
    res.send("Hello World");
    res.status(201).end();
});

//response cookie a show koranor jonno ............
app.get("/seven", function(req, res){

    res.cookie("Name", "Amir Hamza")
    res.cookie("City", "Dhaka")
    res.cookie("Age", "22 Years old")
    res.end("Cookies Set Successful");
});

//response clear cookie a clear koranor jonno ............
app.get("/eight", function(req, res){

    res.clearCookie("Name")
    res.clearCookie("City")
    res.end("Clear Cookies Successful");
});






app.listen(8100, function(){
    console.log('Server Run Success')
})