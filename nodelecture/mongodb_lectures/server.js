const express = require('express') ;
const app = express() ;
const mongoDb = require('./database') ;


app.get('/data' , function (req,res) {

    // insert and find

    //--------------------------------------------------
    // mongoDb.insertDocs(function (data) {
    //     console.log(data) ;
    //     res.send(data) ;
    // }) ;

     //-------------------------------------------------

    // update a doc and find
    // mongoDb.updateDoc(function (updateddata) {
    //
    //     mongoDb.findDocs(function(data){
    //         res.send(data);
    //     }) ;
    //
    // }) ;

    //---------------------------------------------------

    //delete a doc and find
    mongoDb.deleteDoc(function(deleteddata){

        mongoDb.findDocs(function (data) {
            res.send(data) ;
        })
    }) ;


}) ;


app.listen(5000 , function () {
  console.log('server started on port 5000 ') ;
  mongoDb.connection() ;
});