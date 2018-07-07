
// process.argv returns an array --- >  [ 'node' , 'index.js'  , 'arg1' , 'arg2' ......  ]
var a = process.argv[2] ;
var b = process.argv[3] ;

function add( c , d ) {
    console.log( parseInt(c) + parseInt(d)) ;
}

add(a , b ) ;


// some inbuilt packages in node
// process
// fs
// HTTP