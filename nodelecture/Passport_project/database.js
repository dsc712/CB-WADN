const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dsc712',
    password : 'd71298sc',
    database : 'mydb'
});


function connectDb() {
    connection.connect();
}

function addUser(user , password , addData){
    connection.query('INSERT INTO users(username , password ) values (? , ?) ' , [user , password] , function(error , result , fields ){
        if(error) throw error
        addData(result) ;
    }) ;
}

function getUser(username , getTheUser){
    connection.query('Select * from users where (username = ?)' , username , function(error , result , fields){
        if(error) throw error
        getTheUser(result) ;
    })
}


module.exports = {
    connection,
    connectDb,
    addUser ,
    getUser
}