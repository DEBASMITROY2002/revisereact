// console.log("x is", x) error if let x 
let x 
var y
console.log("x is", x)
console.log("y is", y)

x = 10
y = 10
{
    let x = 20
    var y = 20
}
console.log("x is", x)
console.log("y is", y)