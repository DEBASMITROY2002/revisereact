export function AddCity(props) {
  let addNameHandler = props.addNameHandler
  let city = ""
  return (
    <div style = {
        {
            border: "1px solid black",
            backgroundColor: "lightblue",
            width: "wrap-content",
        }
        }>
        Enter Name: <input type="text" onChange={(e) => city = e.target.value}/>
        <br/>
        <input type="button" value="Add Name" onClick={()=>{
            addNameHandler(city);
        }}/>
    </div>
  )
}