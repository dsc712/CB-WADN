var obj = {
    name : "devyendu" ,
    getName : function(){
        console.log(this.name) ;
    }
}

var obj1 = {
    name : "dsc712" ,
    getName : function(){
        console.log(this.name) ;
    }
}

obj.getName() ;  // this is obj
obj1.getName() ; // this is obj1



//-----------------------------------
// in array.forEach(function(){
//     this // is window object
// })

// Array.prototype.boom = function(z){
//     this.push(z) ;
//     return this ;
// }
// [1 , 2, 3, 4 ].boom(5) ;
//------------------------------------