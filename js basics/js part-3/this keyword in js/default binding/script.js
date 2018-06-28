
var a = 5  ;

function hello(){

    var a = 9 ;
    function main(){
        console.log(this.a) ;  // this is window object
    }
    main() ;
}

hello() ;


// default binding - by default this will always bind with window object