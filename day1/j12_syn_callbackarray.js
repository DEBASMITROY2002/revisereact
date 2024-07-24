let arr = [1,2,3,4,5]

//  Sync callback function

// ---------------------- forEach ---------------------- //

arr.forEach((value, index, array) => {
    console.log(`forEach: value is ${value} | index is ${index} | array is ${array}`)
    console.log("----------------")
}) // Here forEach is reciever function, so it is calling the callback function for each element in the array

console.log(`After forEach -> arr is ${arr}`)


// ---------------------- Map ---------------------- //

let newarr = arr.map((value, index, array) => {
    console.log(`Map: value is ${value} | doubled value is ${value * 2}`)
    return value * 2
}) 
// Here map is reciever function, so it is calling the callback function for each element in the array 
// and returning a the new value and storing it in a NEW array
console.log(`After map -> arr is ${arr}`)
console.log(`After map -> newarr is ${newarr}`)

// ---------------------- Filter ---------------------- //

let filteredarr = arr.filter((value, index, array) => {
    console.log(`Filter: value is ${value} | value > 2 is ${value > 2}`)
    return value > 2
}
)
// Here filter is reciever function, so it is calling the callback function for each element in the array

console.log(`After filter -> arr is ${arr}`)
console.log(`After filter -> filteredarr is ${filteredarr}`)

