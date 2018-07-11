// this package is used for finding all the information about current OS
const os = require('os') ;

var totalMemory = os.totalmem() ;
var freeMemory = os.freemem() ;

console.log(totalMemory) ;
console.log(freeMemory) ;

