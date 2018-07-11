// const mysql = require('mysql') ;
//
// var connection = mysql.createConnection({
//    host : 'localhost' ,
//    user : 'dsc712' ,
//     password : 'd71298sc' ,
//     database : 'mydb'
// });
//
// function connectDb(){
//     connection.connect() ;
//     connection.query('SELECT * FROM TASK' , function(error , results , fields ){
//         if(error) throw error ;
//         console.log('The solution is: ' , results) ;
//     }) ;
//
// }
//
// module.exports = {
//    connectDb
// } ;