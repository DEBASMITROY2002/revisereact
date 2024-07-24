function f1(x,y){
    console.log("x is", x)
    console.log("y is", y)
    console.log("x + y is", x + y)
    console.log("----------------")
}

f1() // x is undefined, y is undefined
f1(10) // x is 10, y is undefined
f1(10,20) // x is 10, y is 20
f1(10,20,30) // x is 10, y is 20 (30 is ignored)
