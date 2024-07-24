function add(x=0, y=0, z=0){
    console.log("x is", x)
    console.log("y is", y)
    console.log("z is", z)
    console.log("x + y + z is", x + y + z)
    console.log("----------------")
}

add() // x is 0, y is 0, z is 0
add(10) // x is 10, y is 0, z is 0
add(10,"20") // x is 10, y is 20, z is 0



//  Variadic function
// Rest parameter
// args is an array
// no more than one rest parameter and it must be last
function add2(...args){
    console.log("args is", args)
    let sum = 0
    for (let i=0; i<args.length; i++)
        sum += args[i]
    console.log("sum is", sum)
    console.log("----------------")
}

add2(1) // args is [12], sum is 12
add2(1,2) // args is [1,2], sum is 3
add2(1,"2",3) // args is [1,2,3], sum is 6
add2(1,{"x":10},3) // args is [1, {"x":10}, 3], sum is 4