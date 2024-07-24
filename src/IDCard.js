import './id.css';

export function IDCard(props) {
  let css_props = {
    border: '1px solid black', 
    padding: '10px', 
    margin: '10px',
    width: '200px',
    boxShadow: '5px 5px'
  }
  return (
    <div style={
            css_props
        }>
        <h1>{props.ename}</h1>
        <p>{props.age}</p>
        <p>{props.address}</p>

        <div class='idCard'>
            <p>Deutsche Bank</p>
            <p>Account Number: 123456789</p>
            <img src='https://www.w3schools.com/w3images/avatar2.png' alt='avatar'/>
        </div>
    </div>
  )
}

export function AllEmploee(props){
    let all_emp = "";
    props.names.forEach((name) => {
        all_emp += name + " ~ ";
    })
    
    return (
        <div>
            <h1>All Employees</h1>
            <p>{all_emp}</p>
        </div>
    )
}