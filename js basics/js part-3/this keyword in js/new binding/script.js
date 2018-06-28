function Character(name , power ){
    this.name = name ;
    this.power = power ;
}

let superman = new Character("superman" , "fighting") ;
let wonderwoman = new Character("wonderwoman" , "shield") ;

console.log(superman) ;
console.log(wonderwoman) ;

// new creates a new object which gets binded with the data passed