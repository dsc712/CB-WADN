$(document).ready(function(){
    var socket = io() ;
    let btn = $('#btn');
    let inp = $('#inp') ;
    let result = $('#result') ;

    btn.click(function(){
       let value = inp.val() ;
       console.log(value) ;
       socket.emit('message' , value ) ;
    });

    socket.on('show' , function(data){
       result.append(`<li>${data}</li>`) ;
    });

    socket.on('display' , function(data){
       data.forEach(function(i){
           result.append(`<li>${i}</li>`) ;
       }) ;
    });

});