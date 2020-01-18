const EventEmitter = require('events'); 

class Emitter extends EventEmitter { }

const emitter = new Emitter(); 

emitter.on('knock', ()=> {
	console.log("Who's there?"); 
}); 

emitter.on('knock', () => {
	console.log("Go away!"); 
});


emitter.emit('knock'); 
emitter.emit('knock'); 

// output: 
// Who's there?
// Go away!
// Who's there?
// Go away!