const express = require('express');
const app = express() ;
const path = require('path') ;
const bodyParser = require('body-parser') ;

const todo = [] ;

app.set('view engine' , 'hbs') ;
app.set('views' , path.join(__dirname , "views")) ; // 1st argument is always views , second argument is directory name
                                                    // which we are using for our views

app.use(bodyParser.urlencoded({extended:true})) ;
app.use(bodyParser.json()) ;
app.use('/' , express.static('public') ) ;

app.post('/data', function(req , res){
     todo.push(req.body.task) ;
     res.redirect('/all') ;
});

app.get('/all' , function(req ,res ){

    res.render('main' , { items : todo , color : todo[todo.length - 1 ] } , function(err , html ){
       res.send(html) ;
    }) ;

});


app.listen(5000 , function(){
    console.log("app listening on port 5000....") ;
});

// note : redirect does not work with post to a post route
