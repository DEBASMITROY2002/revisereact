// async returms promise
async function test2(){
    console.log('0. test2');
    let v=50;
    let p = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("1. Promise is getting resolved ...")
        },3000)
        resolve(v) 
        // If resolve(v) is not there, then p wont get resolved value
        // Rest of the code will not be executed
    })
    console.log("2. v= ",v) // as it is await, it will return 100
    console.log("3. p= ",p)
    return p
}

let p_ = test2()
console.log("3. p_= ",p_)
p_.then((success)=>{
    console.log("4. Promise resolved! ",success)
},(fail)=>{
    console.log("5. Promise rejected! ",fail)
})
