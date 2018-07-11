const EventEmitter = require('events_module') ; // returns a class

const emitter = new EventEmitter() ;

// NOTE : order of emitter and listener is important

//Listener for the messageLogged event 
emitter.on('messageLogged' , function (arg) {
    console.log('Listener called' , arg ) ;
}) ;

// event emiiter has an optional second argument , known as event argument
// which is used to send some data with that event
emitter.emit('messageLogged' , {id : 1 , url : 'http://imaginaryURL.com '} ) ; // creates an event