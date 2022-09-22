var express = require('express');
var bodyParser = require('body-parser');
app=express();

app.use(bodyParser.json());

//==========================================================================
// Json data Display body-----------npm install ( npm install body-parser )
//==========================================================================

app.post("/", function(req, res){
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);

    // //indicijual show 

    // let myName = jsonData['Name']
    // let myRoll = jsonData['Roll']
    // res.send(myName + ' ' + myRoll);

})




app.listen(8300, function(){
    console.log('Server Run Success')
})