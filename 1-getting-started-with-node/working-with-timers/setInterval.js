// To run the task in regular interval of times
// setTimeInterval(callback, delay, [, ...args])
// delay (in milliseconds)

const greet = (user) => { 
    // display after every second
    // output: Hello zenius 
    console.log(`Hello ${user}`); 
}; 

setInterval(greet, 1*1000, 'zenius');