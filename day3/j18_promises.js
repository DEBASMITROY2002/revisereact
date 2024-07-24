new Promise((res, rej) => {
    res(2)
}).then(resolve => {
    console.log(`resolve 1: ${resolve}`)
    return new Promise((re, rej) => re(resolve + 1))
}).then(resolve => {
    console.log(`resolve 2: ${resolve}`)
    return resolve + 2
}).then(resolve => { 
    console.log(`resolve 3: ${resolve}`)
})

// // Break down:

// p1 = new Promise((res, rej) => {
//     res(2)
// })

// p2 = p1.then(resolve => {
//     console.log(`resolve 1: ${resolve}`)
//     return new Promise((re, rej) => re(resolve + 1))
// })

// p2.then(resolve => {
//     console.log(`resolve 2: ${resolve}`)
//     return resolve + 2
// })

