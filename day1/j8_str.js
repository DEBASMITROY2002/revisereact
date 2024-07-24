let s1 = "hello"
let s2 = new String("hello")
let s3 = new String("hello")

console.log(s1 == s2) // s1.valueOf() == s2.valueOf() , typecasting to primitive
console.log(s1 === s2) // First check if both are of same data type, then check value. So, false

console.log(s2 == s3)  // false
console.log(s2 === s3)  // false