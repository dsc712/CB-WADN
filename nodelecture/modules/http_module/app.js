const http = require('http') ;

// const server = http.createServer() ;
//
// server.on('connection' , (socket) => {
//
//     console.log('new connection ') ;
// }) ;

const server = http.createServer( (req ,res ) => {

    if(req === "/"){
        res.write('root route') ;
        res.end() ;
    }
    if(req === "/api"){
        res.write('api route') ;
        res.end() ;
    }
}) ;


server.listen(5000) ;
console.log("server is listening .. ") ;