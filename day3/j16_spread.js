let obj1 = {
    singer : "lata",
    album:{
        name:"lata hits",
        year: 1990,
        play: ()=>{
            console.log("playing");
        }
    },
    age : 90
}

// let obj2 = obj1;  // shallow copy
// obj2.singer = "asha";
// console.log(obj1); // singer is asha
// console.log(obj2); // singer is asha

let obj3 = {...obj1}; // deep copy of outer object
obj3.singer = "asha";
obj3.album.name = "asha hits";
console.log(obj3); // singer is asha , album name is asha hits
console.log(obj1); // singer is lata but album name is asha hits
obj3.album.play(); // Playing


let obj4 = JSON.parse(JSON.stringify(obj1)); // deep copy of entire object
obj4.singer = "asha";
obj4.album.name = "asha hits";
console.log(obj4); // singer is asha , album name is asha hits
console.log(obj1); // singer is lata , album name is lata hits
console.log(obj4.album.play); // undefined