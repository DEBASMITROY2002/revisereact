import {useSelector} from 'react-redux'
export function C1(){
    
    let data = useSelector((state)=>{
        return state.counter
    })

    return (
        <div>
            <h1>Component C1 | Reads the shared data</h1>
            <p> Current value of shared data is {data}</p>
        </div>
    )
}