let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let n = Math.random()*100;
        if(n<90){
            resolve(n)
        }else{
            reject(n)
        }
    },3000)
});


console.log("1. p= ",p)

let a = p.then((success)=>{
    console.log("Promise resolved! ",success)
},(fail)=>{
    console.log("Promise rejected! ",fail)
}) // This will go asynchrounous way

console.log("2. p= ",p)
console.log("3. a= ",a)