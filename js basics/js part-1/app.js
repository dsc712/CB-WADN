//-----------------------------------------------------
// function fun1(a , b ){
// 	// console.log("hello") ;
// 	// return "Hello" ;
// 	// console.log(a+b) ;
// 	return a+b;
// }

// var p = fun1(10 , 15) ;
// console.log("The answer is" + p) ;




//------------------------------------------------------

// function fun1(a)
// {
// 	if(a){
// 		console.log("running fun1") ;
// 		fun2(true) ;
// 	}
// }

// function fun2(b){
// 	if(b){
// 		console.log("running fun2") ;
// 		fun1(false) ;
// 	}
// }

// fun1(true) ;
// fun2(true) ;





//-------------------------------------------------------



// in js functions can be treated as variables

// let p = function fun1() {   // fun1 name is optional here   here if p.name = fun1
// 	console.log("hello") ;  // if the function would have been anonymous , then  p.name = p
// } 


// let never hoists 
// var hoists , but only L.H.S gets hoisted , i.e only declaration gets hoisted
// functions get hoisted  




//--------------------------------------------------------





// Higher order functions  - is a function which can accept another function as an argument 
// or can return another function

// function createGreeter(greeting , findname){
// 	function greeter(){
//        console.log( greeting  + findname() ) ;
//     }
//     return greeter ;
// }
// function nameGen(){
// 	return "Harry"
// }

// let goodMorning = createGreeter("Good Morning " , nameGen ) ;
// let goodEvening = createGreeter("Good Evening " , nameGen) ;
// goodMorning() ;
// goodEvening() ;



//---------------------------------------------------------------------------------

//practice higher order functions

// function higherOrder(fucker , def){
// 	function fun(){
// 		console.log(fucker() + " " + def ) ;
// 	}
// 	return fun ;
// }

// function fucker(){
// 	return "fuck" ;
// }

// let fuckyou = higherOrder(fucker , "you") ;
// let fuckOff = higherOrder(fucker , "Off") ;
// fuckyou() ;
// fuckOff() ;

//----------------------------------------------------------



