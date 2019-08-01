// setTimeout(callback, delay, [, ...args])
// delay (in milliseconds)

const greet = (user) => { 
    // display after 2 seconds
    // output: Hello zenius 
    console.log(`Hello ${user}`); 
}; 

setTimeout(greet, 2*1000, 'zenius');