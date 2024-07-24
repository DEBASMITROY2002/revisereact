
async function test(){
    return 5;
}
/*
How 5 is returned from test()?

1. test() is async function, so it returns promise. 
2. 5 is returned from test() is resolved value of promise.
3. So, p.then((success)=>{}) will get 5 as success.
*/

let p = test();
console.log("1. p= ",p)
p.then((success)=>{
    console.log("2. Promise resolved! ",success)
},(fail)=>{
    console.log("3. Promise rejected! ",fail)
})