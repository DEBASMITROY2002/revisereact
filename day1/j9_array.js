// Arrays

let arr = [10,20,30,40,50]

console.log(arr.length)

arr.push(60)

console.log(arr)

arr.pop()

console.log(arr)

console.log("-----------------")
// for loop
for (let i=0; i<arr.length; i++)
    console.log(arr[i])

console.log("-----------------")
// for in loop 
for (let i in arr)
    console.log(arr[i])

console.log("-----------------")
for (let i of arr)
    console.log(i)


//  in vs of
// in - returns index
// of - returns value


// Splice : Add, Remove, Replace 

// Remove
console.log('-----------------')
console.log(arr)
deleted = arr.splice(1,2) // remove 2 element from index 1
console.log(arr)
console.log(deleted)

// Add
console.log('-----------------')
console.log(arr)
deleted = arr.splice(1,0,20,30) // add 20, 30 at index 1  , 0 elements removed
console.log(arr)
console.log(deleted)

// Replace
console.log('-----------------')
console.log(arr)
deleted = arr.splice(1,1,200) // replace element at index 1 with 200
console.log(arr)
console.log(deleted)
