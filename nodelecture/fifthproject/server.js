const server = require('express') ;
const app = server() ;
const bodyParser = require('body-parser') ;

var urlencodedParser = app.use(bodyParser.urlencoded({ extended : false })) ;
var jsonParser = app.use(bodyParser.json() ) ;

app.post('/makePost' , function(req , res ){
    console.log(req.body) ;
    res.sendStatus(200) ;
}) ;

app.listen(5000 , function(){
    console.log('server started') ;
})