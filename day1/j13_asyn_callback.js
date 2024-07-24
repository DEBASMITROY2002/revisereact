// Asynchrnonous Callbacks in JavaScript

/*
Pseudo code:
function Reciever(callback) {
    setTimeout(function() {
        callback();
    }, 2000);
    ....
    ....
    retrun something;
}
   
So, Reciever is calling the callback function and the callback function is executed after 2 seconds in the Reciever function itself
*/


//  Async callback function

console.log("Before setTimeout")
console.log("Out Thread id is",process.pid)
setTimeout(()=>{
    // Print thread id
    console.log("In Thread id is",process.pid)
    console.log("Inside setTimeout")
},1000); // This will be executed after 1 second
//  Here the reciever function is setTimeout and the callback function is the arrow function
console.log("After setTimeout")
// while(true);

// Call back queue: 
// The callback function is stored in the callback queue and is executed after the main thread is executed completely.



let interval_id = setInterval(()=>{
    console.log("Inside setInterval")
},1000); // This will be executed after every 1 second , interval is 1 second

let a = clearInterval(interval_id); // This will stop the setInterval function
console.log("a is",a) // a is undefined

setTimeout(()=>{
    clearInterval(interval_id); // This will stop the setInterval function
},5000); // This will be executed after 5 seconds


