// setTimeout(function(){
//     function getData(done){
//       console.log("get the data") ;
//       let x = "getData" ;
//       console.log(done(x)) ;
//     }
//
//     getData(setData) ;
//
// } , 0 ) ;
//
// function setData(y){
//     return "Hello " + y ;
// }


// always make heavy task execute latest
//
// function imageProcessing(){
//
//     imageDetection( function(img , enhancement ){
//         console.log("image cleaning started" ) ;
//         console.log("Image detected " + img ) ;
//         enhancement(img + " enhanced ")  ;
//     } ) ;
//
//     console.log("image processing ended ") ;
// }
//
// function imageDetection(imgCleaning){
//     setTimeout(function(){
//         let detected_image = 'Image1'
//         // image detection
//         imgCleaning(detected_image , function(enhanced_img){
//             console.log("enhancing image ") ;
//             setTimeout(function(){
//                 console.log("algorithm for enhanced image " + enhanced_img )  ;
//             } , 0 ) ;
//             console.log("enhanced imaged processing still going on .... ") ;
//         }) ;
//     } , 0)
// }
//
// imageProcessing() ;