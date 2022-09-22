const express = require('express');
var app = express();

//Application MiddleWare
app.use(function(req, res, next) {
    console.log('Application Level MiddleWare')
    next();
})

//rout
app.get('/', function(req, res){
    res.send('This is Home Page');
})

app.get('/about', function(req, res){
    res.send('This is About Page');
})

app.get('/contact', function(req, res){
    res.send('This is Contact Page');
})



app.listen(5001)
    console.log('Server Connect Successful')

//======================================================
//Spacific rout MiddleWare
//======================================================

const express = require('express');
var app = express();

//rout
app.get('/', function(req, res){
    res.send('This is Home Page');
})

// MiddleWare <
app.use('/about',function(req, res, next) {
    console.log('Application Level MiddleWare')
    next();
})
// MiddleWare >

app.get('/about', function(req, res){
    res.send('This is About Page');
})

app.get('/contact', function(req, res){
    res.send('This is Contact Page');
})



app.listen(5000)
    console.log('Server Connect Successful')
