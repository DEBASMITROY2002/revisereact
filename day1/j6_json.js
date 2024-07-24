let obj = {
    "name":"John",
    "age":30,
    "address": {
        "street":"123 Main St",
        "city":"New York"
    },
    "eatFun": function() {
        console.log("Eating non-veg")
    },
    "displayDetails": function() {
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Address is ${this.address.street}, ${this.address.city}`)
        // console.log(this.displayDetails())
    }
}

console.log(obj)
console.log(obj.eatFun)
obj.eatFun()
obj.displayDetails()
