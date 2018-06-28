// callbacks

function readFile(wr){
    let path="xyz" ;
    console.log("Reading Started") ;
    setTimeout(function(){
        wr(function(newPath){
            console.log("Reading is done") ;
            console.log(newPath + path) ;
        }) ;
    } , 0 ) ;

    console.log("Reading ended") ;
}

readFile(function(data){
    data("www") ;
}) ;