const http = require('http') ;
const express = require('express') ;
const app = express() ;

const socketServer = http.Server(app) ;
const socket = require('socket.io') ;
const io = socket(socketServer) ;


app.use('/',express.static('public') ) ;

// let messages = [] ;
// let users = [] ;
// let user_ids = [] ;
// let login = {} ;

//there are some predefined event in socket.io and we can make custom events as well
io.on('connection' , function(sk){
    // let username = prompt("enter your username  :  ") ;
    // users.push(username) ;
    //
    // user_ids.push(sk.id) ;
    // login[ users[users.length - 1 ] ] =

    sk.emit('display' , messages) ;

    sk.on('message' , function(data){
        messages.push(data) ;
        // sk.broadcast.emit('show' , data) ;
        sk.emit('show' , data) ;
    });

});

io.on('disconnect' , function(){

}) ;
// .emit vs .on   (.emit emits the information     ||||    .on recieves the information)
socketServer.listen(8080 , function(){
    console.log("Server is listening on port 8080") ;
}) ;


// show connected users and disconnected users
