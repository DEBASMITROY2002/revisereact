//  Like Factory pattern, closure is also a way to create private variables in JavaScript.
function getIncrementor(jump) {
    // In traditional langs like Java, this would be out-of-scope for the returned function
    // But in JS, the returned function has access to the variables in the outer function
    let counter = 0; 
    let jump_ = jump
    function incr(){
        counter+=jump_;
        return counter;
    }
    return incr;
}


let myIncr1 = getIncrementor(10);
// myIncr1 is a function that has access to the counter variable in getIncrementor
let latest_counter_1 = myIncr1();
console.log(latest_counter_1); // 1
console.log(myIncr1()); // 2
console.log(myIncr1()); // 3
console.log(latest_counter_1); // 1

let myIncr2 = getIncrementor(5);
let latest_counter_2 = myIncr2();
console.log(latest_counter_2); // 1
console.log(myIncr2()); // 2
console.log(myIncr2()); // 3