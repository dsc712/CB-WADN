const file = require('fs') ;

function writeFile(data , cb){
  file.writeFile('index.txt' , data  , function(err){
      if(err){
          cb(err) ;
      }

      file.readFile('index.txt' , function(err , data){
         if(err) throw err ;
         cb(data) ;
      });
  });
}

module.exports = {
    writeFile
}
