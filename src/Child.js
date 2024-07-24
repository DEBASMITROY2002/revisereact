export function Child(props){
    let names = props.names;

    function renderList(){
        return names.map((v,i,a)=>{
            // These keys are used by React to keep track of the items in the list
            // It creates a virtual DOM and compares it with the real DOM
            // If the keys are not present, React will have to compare the entire list
            return <li key={i}>{v}</li> 
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}