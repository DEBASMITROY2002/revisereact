let a = 10
let b
console.log(typeof(a))
console.log(typeof(b))
console.log(b)

if (typeof(a) === 'number') {
    console.log('a is a number')
}

// undefined is a type in JS as well as a value
if (typeof(b) === 'undefined') {
    console.log('b is undefined')
}



//         ---------------- String ---------------

let s1 = "Hello World"
console.log(s1.length)
console.log(typeof(s1))

// string is a primitive object in JS
// new String('rardasda') -> object

s1 = new String('Hello World')
console.log(s1, typeof(s1))
s2 = `${s1}`
console.log(s2, typeof(s2))

s1 = `Hello World ${a}`
console.log(s1, typeof(s1))



//        ---------------- Array ---------------

let arr = [1, 2, 3, 4, 5]
console.log(arr, typeof(arr))

let v2 = {
    "hello":"world"
} // JSON object
console.log(v2, typeof(v2))


//        ---------------- Function datatype ---------------
let f1 = function() {
    console.log('Hello World')
}
console.log(f1, typeof(f1))
f1()
