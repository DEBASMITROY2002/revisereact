import { configureStore } from "@reduxjs/toolkit"
 
function MyReducer(state={counter:100},action)
{
    if(action.type === "INCREMENT")
    {
        let t = state.counter;
        t++
        return {...state,counter:t}
    }
    if(action.type === "DECREMENT"){
        let t = state.counter;
        t--
        return {...state,counter:t}
    }
     return state
}
 
let store =configureStore({reducer:MyReducer})
export default store;