var mongoClient=require ('mongodb').MongoClient;

//var URL = "mongodb+srv://amirhamja:y8q3YcmEedKXNtkj@cluster0.gsyup6g.mongodb.net/?retryWrites=true&w=majority"
var URL = "mongodb://127.0.0.1:27017/"

//var config = {useUnifiedTopology: true};
////mongoClient.connect(URL, config, function(error){
mongoClient.connect(URL, function(error, myMongoClient){

    if(error){
        console.log("Connect Fail");
    }
    else{
        console.log("Connect Success");
        InsertData(myMongoClient)
        //deleteData(myMongoClient)
        //deleteAllItem(myMongoClient)
        //findDataOne(myMongoClient)
        //findDataAll(myMongoClient)
        //findDataAllProjection(myMongoClient)
        //findDataQuery(myMongoClient)
        //findDataLimit(myMongoClient)
        //findDataSort(myMongoClient)
        //findDataUpdate(myMongoClient)

        //Collection ......................
        //createMyCollection(myMongoClient)
        //deleteMyCollection(myMongoClient)



    }
});

// //Data insert
//=====================

function InsertData(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    var myData = {Name:"Amir Hamza",Dep:"Computer",Roll:"951904",City:"Dhaka"};
    //var myData = {Name:"Parvej Hossain",Dep:"Computer",Roll:"951947",City:"Dhaka"};
    //var myData = {Name:"Rayhan Ali",Dep:"Computer",Roll:"951899",City:"Dhaka"};

    myCollection.insertOne(myData, function(error){
        if(error){
            console.log("Data Insert Fail");
        }
        else{
            console.log("Data Insert Success");
        }
    });

}

//====================
//data delete
//====================

function deleteData(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    var myData = {Roll:"951904"};
    myCollection.deleteOne(myData, function(error){
        if(error){
            console.log("Data Delete Fail");
        }
        else{
            console.log("Data Delete Success");
        }
    })
}

//====================
//data delete all
//====================

function deleteAllItem(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    myCollection.deleteMany(function(error, resultObj) {
        if(error){
            console.log("Data Delete Fail");
        }
        else{
            //console.log(resultObj + "Item Delete Success");
            console.log(resultObj.deletedCount + " " + "Item Delete Success");
        }
    })
}

//====================
//findDataOne
//====================

function findDataOne(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    //var findData = {}//erokom faka thakle db er 1 st ta find korbe
    var findData = {Roll:"951904"}
    myCollection.findOne(findData, function(error, result){
        console.log(result);
    })
}

//====================
//findData all
//====================

function findDataAll(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    myCollection.find().toArray(function(error, result){
        console.log(result);
    })
}

// ==========================================
// findData projection //Column find korbe
// ==========================================

function findDataAllProjection(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    var itemObj= {}
    var itemProjection = {projection: {_id:0, Name: 1, Roll: 1}}
    myCollection.find(itemObj, itemProjection).toArray(function(error, result){
        console.log(result);
    })
}

// =================================================================
// findData projection//Query korbe jei name dibo ba roll dibo...
// =================================================================

function findDataQuery(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    var query= {Name:'Amir Hamza', Roll:'951904'}
    myCollection.find(query).toArray(function(error, result){
        console.log(result);
    })
}

//==============================================================================
//findData Limit//Ekhane jekoyta data dekhte chai oikoyta limit(toto)dite hobe
//==============================================================================

function findDataLimit(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    myCollection.find().limit(4).toArray(function(error, result){
        console.log(result);
    })
}

//===================================================================================
//findData Sort//Ekhane Data asending && desending hobe 1 hole asending ,-1 desending
//===================================================================================

function findDataSort(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    //var sortData = {Name: -1}
    var sortData = {Name: 1}
    myCollection.find().sort(sortData).toArray(function(error, result){
        console.log(result);
    })
}

//===================================================================================================
//findData UpdateOne //UpdateOne method 3 ta paramiter ney (1.searchQuery, 2.NewValue,  3.Callback() )
//===================================================================================================

function findDataUpdate(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    var myCollection = myDataBase.collection('students');

    var dataQuery = {Roll: "1"};
    var myNewData = {$set:{Name: "Rayhan"}}
    myCollection.updateOne(dataQuery, myNewData, function(error, result){
        console.log(result);
    })
}

//=======================
//createMyCollection // 
//=======================

function createMyCollection(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    myDataBase.createCollection("students", function(error, result){
        console.log(result);
    })
}

//=======================
//deleteMyCollection // 
//=======================

function deleteMyCollection(myMongoClient){
    var myDataBase = myMongoClient.db('school');
    myDataBase.dropCollection("parants", function(error, result){
        console.log(result);
    })
}