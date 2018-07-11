const fs = require('fs') ;


fs.readdir('../' , function(err , files){  // synchronous method
    if(err){
        console.log(err) ;
    }else{
        console.log(files) ;
    }
}) ;