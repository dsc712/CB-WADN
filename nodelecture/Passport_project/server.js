const express = require('express') ;
const app = express() ;
const bodyParser = require('body-parser') ;
const bcrypt = require('bcrypt') ;
const db1 = require('./database') ;
const db = require('./user.json') ;
app.use('/' , express.static('public') ) ;
app.use(bodyParser.urlencoded({extended : true })) ;
app.use(bodyParser.json()) ;

// passport setup
const passport = require('passport') ;
const passportLocal = require('passport-local').Strategy ;
const session = require('express-session') ;
const cookieParser = require('cookie-parser') ;
app.use(cookieParser()) ;
app.use(session({secret : 'This is my secret'})) ; // this secret will be used to encode/decode the session
app.use(passport.initialize()) ;  // initialize the passport
app.use(passport.session()) ; // initialize the session


const saltRounds = 10; // salt rounds is the number of iterations it will take to encrypt the password , standard is 10


// handling login route for local strategy --> second argument is a middleware
app.post('/login' , passport.authenticate( 'local' ,
                         {
                             successRedirect : '/success' ,
                             failureRedirect: '/failure'
                         }
), function(req , res ){
    // callback
} ) ;


// in signup form post take the password encrypt it and store in database
app.post('/signup' , function(req , res ){
   let user = req.body.username ;
   let password = req.body.password ;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
             db1.addUser( user , hash , function(data){
                 res.send(data) ;
              })
    });

}) ;

app.get('/success' , function (req , res) {
    res.send(req.user) ;
});



app.get('/failure' , function (req,res) {
    res.redirect('/') ;
});


// logic for authentication
passport.use(new passportLocal(function(username , password , done ){

                                        db1.getUser(username , function(data){

                                            console.log(data[0].username) ;
                                            console.log(data[0].password) ;

                                            // if username is incorrect , do not pass the data in done() , just pass the false as data and an error message along with it
                                            if(username !== data[0].username){
                                                return done(null , false , {message : 'username is correct'}) ;  // (err , data , message)
                                            }

                                                // match the password entered by user , with the password coming from database
                                                // Load hash from your password DB.
                                                bcrypt.compare(password , data[0].password, function(err, res) {

                                                    // res will be false if password do not matches

                                                    if(!res){
                                                        return done(null , false , {message: 'password is incorrect'} );
                                                    }
                                                    // return the user from database
                                                    return done(null , data[0].username) ;
                                                });


                                        }) ;

                                    })

);

// this route will be displayed only when the user is vallidated
app.get('/data' , function (req ,res ) {
    if(req.user){
        res.send('vallidated') ;
    }else{
        res.redirect('/') ;
    }
});


// serialize the id from user
passport.serializeUser(function(id , done){
    return done(null , id ) ;
}) ;


// deserialize user from id
passport.deserializeUser(function(id , done){
        return done(null , id);
}) ;


app.listen(5000 , function(){
    console.log("server started on port 5000 .... ") ;
    db1.connectDb() ; // as soon as server is connected , connect the database also
    // connectDb() method is coming from 'database.js'
}) ;
