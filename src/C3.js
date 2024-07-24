import {useDispatch} from 'react-redux'

export function C3(){
    let dispatcher = useDispatch();

    return(
        <div style={
            {
                border: '1px solid black', 
                padding: '10px', 
                margin: '10px', 
                boxShadow: '5px 5px 5px grey', 
                backgroundColor: 'lightcoral'
            }}>
            <h1>Component C3 | Reduces the shared data</h1>
            <input type='button' onClick={()=>{
                dispatcher({type:'DECREMENT'})
            }} value='Decrement'/>
        </div>
    )
}