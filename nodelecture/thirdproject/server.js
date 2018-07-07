const express  = require('express') ;  // it returns a function definition
const app = express() ;  // it returns an object


//express.static built-in middleware function in Express.
app.use('/todo' , express.static('public')) ;  // first argument is mounting which is optional

// app.use('/register' , express.static('public/form.html')) ;

app.get('/' , function(req , res){
    res.send("Hello world ") ;
}) ;

app.get('/hello' , function(req , res){
    res.send("hello page") ;
}) ;

app.get('/reg' , function(req,res){
    var a = req.query ;
    // console.log(a) ;

    var firstname = a.firstname ;
    var branch = a.branch ;
    var phonenumber = a['phone number'] ;

    res.send("firstname : " + firstname + "\nbranch : " + branch + "\nphone number : " + phonenumber ) ;

}) ;

app.get('/hello/students' , function(req,res){
    res.send("hello students , welcome to the world of nodejs") ;
})  ;

app.listen(5000 , function(){
    console.log("server is listening") ;
}) ;
