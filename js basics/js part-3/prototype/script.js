function game(name , player){
    this.name = name ;
    this.player = player ;
}


// prototypes are used to share same variables over diferent functions

game.prototype.getGame = function(){
    console.log(this.name , this.player ) ;
}

game.prototype.updateGame =  function(gam){
    this.name  = gam ;
}

let cricket = new game('cricket' , 9) ;
cricket.getGame() ;
cricket.updateGame("basketball") ;
cricket.getGame() ;