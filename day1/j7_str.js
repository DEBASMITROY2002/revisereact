let s1 = "hello"
let s2 = "hello"
let s3 = new String("hello")
let s3_ = s3
let s4 = new String("hello")

console.log(s1 == s2) // s1.valueOf() == s2.valueOf() , typecasting to primitive
console.log(s1 == s3) // s1.valueOf() == s3.valueOf() , typecasting to primitive
console.log(s3 == s4) // s3.valueOf() == s4.valueOf() x , no typecasting as both are objects
console.log(s3 == s3_) 

s3_[0] = 'H'
console.log(s3)
console.log(s3_)