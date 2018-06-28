
// EXPLICIT BINDING

// call
// -------------------------------------------------------------

function hello(a,b,c) {
    console.log(this.getName());
    console.log(a,b,c)

}


var obj = {
    name: "dsc712",
    getName: function() {
        return this.name;

    }
}

hello(1 ,2 ,3 );
hello.call(obj, 1,2,3);

function getName() {
    return "Main";

}


//----------------------------------------------------------------




// apply
function hello1(a,b,c) {
    console.log(this.getName1());
    console.log(a,b,c)

}


var obj1 = {
    name: "dsc712",
    getName1 : function() {
        return this.name;

    }
}

hello1(1 , 2, 3 );
hello1.apply(obj1, [1,2,3] );

function getName1() {
    return "Main";

}
//------------------------------------------------------------------

