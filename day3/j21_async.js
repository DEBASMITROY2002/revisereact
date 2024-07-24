async function f1(){
    let str = "intial value";
    console.log("1. str= ",str)

    let p = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            str = "updated value"
            console.log("2. str= ",str)
            resolve(str)
        },3000)
    })

    console.log("3. str= ",str)
}

f1()