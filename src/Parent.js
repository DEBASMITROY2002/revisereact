import { Child } from "./Child";
import { AddCity } from "./AddCity";
import { useState } from "react";


export function Parent(){
    let [names,setNames] = useState(["Alice", "Bob", "Charlie", "David", "Eve"]);
    function addNameHandler(name){
        if (name === "") {
            return;
        }
        names.push(name);
        setNames([...names])  // Async. Delayed execution of the setNames function. After the function is executed, the names array is updated.
        // Deep copy must be done to ensure the == check in object ref checks , otherwise no re-render
        // console.log(names);
    }
    let [showFlag, setShowFlag] = useState(false);
    return (
        <div>
            Want to to add names ? <input type="checkbox" onChange={(e) => setShowFlag(e.target.checked)}/>
            {showFlag && <AddCity addNameHandler={addNameHandler}/>}
            <Child names={names}/>
        </div>
    )
}