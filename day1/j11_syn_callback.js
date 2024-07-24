//    Callback functions tutorial
//    - Callback functions are functions that are passed as arguments to other functions

//  Sync callback function pseudo code : Reciver calls the callback function
//  function Reciever(callback) { 
//    callback();
//   ....
//  ....
//  retrun something;
// }
// So, Reciever is calling the callback function and the callback function is executed in the Reciever function itself 
// and then the Reciever function returns something.


//  Async callback function pseudo code : Reciver calls the callback function
//  function Reciever(callback) {
//    setTimeout(function() {
//      callback();
//    }, 2000);
//  ....
//  ....
//  retrun something;
 
//  So, Reciever is calling the callback function and the callback function is executed after 2 seconds in the Reciever function itself
//  and then the Reciever function returns something. 




//  Sync callback function
function RecieverSync(x,y,callback) {
    console.log("Inside RecieverSync")
    callback(x,y);
    // wait for 2 seconds
    console.log("Exiting RecieverSync")
    return "RecieverSync done"
}

RecieverSync(10,20,(x,y)=>{
    console.log("Inside callback")
    console.log(`x is ${x} | y is ${y} | x + y is ${x+y}`)
})