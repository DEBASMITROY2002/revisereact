import {useDispatch} from 'react-redux'

export function C2(){
    let dispatcher = useDispatch();

    return(
        <div style={
            {
                border: '1px solid black', 
                padding: '10px', 
                margin: '10px', 
                boxShadow: '5px 5px 5px grey', 
                backgroundColor: 'lightblue',
            }}>
            <h1>Component C2 | Increases the shared data</h1>
            <input type='button' onClick={()=>{
                dispatcher({type:'INCREMENT'})
            }} value='Increment'/>
        </div>
    )
}