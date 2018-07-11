const server = require('express');
const app = server();
const PORT = process.env.PORT || 5000;


// Create TodoList Array Here
let todoListserver = [] ;
let status = [] ;

app.use('/', server.static('./public'));

app.get('/add', function(req,res) {

    // Get the todoItem using req.query
      console.log(req.query.todo) ;

    // Push In todoList ARRAY and status array
       todoListserver.push( req.query.todo ) ;
       status.push('false') ;

    // Response back => req.query
        res.send( req.query.todo  ) ;
});

app.get('/display', function(req,res) {

    // Send TodoList Array to the client
    res.send( {todoListserver , status} ) ;
})

app.get('/check' , function(req , res){
  let value = req.query.val ;
  let index = req.query.index ;

  console.log(value) ;
  // toggle the state of todo.value
  if(value === '0' ){
      value = 1 ;
  }else if(value === '1'){
      value = 0 ;
  }

  status[index] = value ;
  res.sendStatus(200) ;

});

app.get('/update' , function(req , res){

    let i = req.query.position ;
    let item = req.query.val ;
    todoListserver[i] = item ;
    console.log(item) ;
    console.log(todoListserver) ;
    res.sendStatus(200) ;

}) ;

app.get('/delete' , function(req , res){

    let i = req.query.index ;
    todoListserver.splice(i , 1 ) ;
    status.splice(i , 1 ) ;
    res.sendStatus(200) ;

}) ;

app.listen(PORT, function(){

    console.log("Server running on Port " + PORT);

}) ;