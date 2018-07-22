const mongo = require('mongodb').MongoClient ;
const url = 'mongodb://localhost:27017' ;
const dbName = 'shopping' ;
let shopping ;


function connection(){
  mongo.connect(url , function(err , client ){
      console.log(client) ;
      shopping = client.db(dbName) ;
  })  ;
}


function insertDocs(cb){
    const  collection = shopping.collection('documents') ; // it is both setter and getter
    collection.insertMany([{a:1}
                         , {b:1}
                         , {c:1}] , function(err ,result){
                                        findDocs(function(data){
                                            cb(data) ;
                                        })
                                    });
}


function findDocs(cb){
    const  collection = shopping.collection('documents') ; // it is both setter and getter
    collection.find({}).toArray(function (err , docs) {  // find returns a cursor which needs to be converted into an array
       cb(docs) ;
    });
}


function updateDoc(cb){
    const collection = shopping.collection('documents') ;
    collection.updateOne({a : 1 } , { $set : {a : 2 } } , function(err , updateddoc){
        cb(updateddoc) ;
    }) ;

}


function deleteDoc(cb){
    const collection = shopping.collection('documents') ;
    collection.deleteOne({b : 1} , function(err , deleteddoc){
        cb(deleteddoc) ;
    }) ;
}


module.exports = {
    connection ,
    insertDocs ,
    findDocs ,
    updateDoc ,
    deleteDoc
}