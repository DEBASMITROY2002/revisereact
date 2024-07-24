import { useEffect } from "react";
import { useState } from "react";

export function UseEfEx(){
    let [msg, setMsg] = useState('Hi')

    // setMsg('Hello') // xxxxxxxxx
    // recursive call 
    //Too many re-renders. React limits the number of renders to prevent an infinite loop
    
    useEffect(()=>{
        console.log('Component is mounted')
        return ()=>{
            console.log('Component is unmounted')
        }
    }, [])

    useEffect(()=>{
        console.log('msg Component is mounted', msg)
        setMsg('Hello')  // good place to change the state // ok ok ok ok
    }, [msg]) // msg is the dependency, so whenever msg changes, this effect will be called

    return (
        <div>
            <p>Use Effect Example</p>
            <input type='text' onChange={(event)=>{setMsg(event.target.value)}}/>
        </div>
    )
}
