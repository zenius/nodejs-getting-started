const EventEmitter = require('events'); 

class Job extends EventEmitter { }

const job = new Job(); 

//  eventEmitter.on() method is used to register listeners
job.on('done', (timeDone) => {
	console.log(`Job Completed on ${timeDone}`); 
}); 

// eventEmitter.emit() method is used to trigger the event.
job.emit('done', new Date());

job.removeAllListeners();  