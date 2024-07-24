import {useState} from 'react'

export default function Calc() {
    let [n1, setn1] = useState(0)
    let [n2, setn2] = useState(0)
    let [op, setop] = useState('?')
    let [result, setresult] = useState(0)

    function changeN1(val){
        setn1(val)
    }
    function changeN2(val){
        setn2(val)
    }

    function handler(event) {
        // setop(event.target.value)
        let res = 0
        switch (op) {
            case 'add':
                res = n1 + n2
                break
            case 'sub':
                res = n1 - n2
                break
            case 'mul':
                res = n1 * n2
                break
            case 'div':
                res = n1 / n2
                break
        }
        // setresult(
        //     (prev) => {
        //         console.log(`prev is ${prev}`)
        //         return res
        //     }
        // )
        // setresult(res)
        // console.log(`Result = ${result}`)

        // document.querySelector('.result').innerHTML = `Result is ${result}` // Any thing with class result
        // document.getElementById('result').innerHTML = `Result is ${result}` // Any thing with id result
        // We can avoid the above two lines by using useState
    }

    return (
        <div>
            <input type='number' id='num1' onChange={(event) => {setn1(parseInt(event.target.value)) }} />
            <input type='number' id='num2' onChange={(event) => {setn2(parseInt(event.target.value)) }} />
            <br/>
            <p>Choose Operation</p>
            <p>
                <select onChange={handler}>
                    <option value='add'>Add</option>
                    <option value='sub'>Sub</option>
                    <option value='mul'>Mul</option>
                    <option value='div'>Div</option>
                </select>
            </p>
            <p className="result" id='result'>{n1} {op} {n2} = {result}</p>
        </div>
    )

}