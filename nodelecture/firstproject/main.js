// var x = 3 ;
// var y =2 ;

// console.log(x) ;
// console.log(y) ;
//-----------------------------------------------------

// this variables will not be exported now
this.x =3 ;
this.y = 2 ;
global.a = 5 ;


var z = 5 ;

var add = function(a , b ){
    return a+b ;
}

// this is overwritten by module.exports
module.exports = {
      z : z  ,
      add : add
} ;



// important points :
// There are three scopes ,
//     this ,
//     module.exports ,
//     global