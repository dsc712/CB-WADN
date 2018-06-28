// there are two phases in js , compiler phase and interpreter phase
// and in the compiler phase all the components of js code get registered(hoisted) 
// all the declarations are done in compiler phase and all the initializations are done in interpreter phase


// console.log(hello()()) ; // hoising of hello function will take place
// function hello(){
// 	return function world(){
// 		return "main" ;
//  	}
// }

// console.log(hello()) ;
// console.log(hello()()) ;

// x() ; // here hoisting will not take place
// var x = function(){

// }


// closures
// --------
// var x ;
// function hello(){
// 	var y = 2 
// 	return function main(){
// 		return x = y 
// 	}
// }

// hello()() ;
// console.log(x) ;