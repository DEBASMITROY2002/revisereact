// import logo from './logo.svg';
// import './App.css';
import { IDCard , AllEmploee } from './IDCard.js';

function App() {
  let x = 10
  return (
    <>
    {x}
    <h1>Hello React</h1>
    <p>Hello Node</p>
    <IDCard ename="John Doe" age="25" address="123 Main St" bank="Deutsche Bank" accno="123456789"/>
    <IDCard ename="Jane Doe" age="30" address="456 Main St" bank="Deutsche Bank" accno="987654321"/>
    <IDCard ename="John Smith" age="35" address="789 Main St" bank="Deutsche Bank" accno="456789123"/>
    <AllEmploee names={['John Doe', 'Jane Doe', 'John Smith']}/>
    </>
  )
}

export default App; 
