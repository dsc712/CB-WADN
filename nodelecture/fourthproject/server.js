const server = require('express') ;  // it returns a function
const app = server() ; // it returns an object
const PORT = process.env.PORT || 5000 ;

app.use('/' , server.static('./public') ) ;  // serving static files


app.get('/add' , function(req , res ){
    res.send("Task added") ;
}) ;

app.listen(PORT , function(){
    console.log('server started on port number ' + PORT ) ;
}) ;

