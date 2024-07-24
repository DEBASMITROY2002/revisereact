export default function sayhello() {

    function Handler1(event) {
        if (event.target.value == 'Say Hello') {
            console.log('Handler1')
        }
        else {
            let input = event.target.value
            console.log(document.getElementById('text1').value)
            document.getElementById('space').innerHTML = input
            document.getElementById('cap').innerHTML = "Caps : "+input.toUpperCase()
            document.getElementById('len').innerHTML = "Length : "+input.length
        }
        // document.getElementById('space').innerHTML = 'Hello World'
    }

    function Handler2(event) {
        let input = event.target.value
        console.log(document.getElementById('text1').value)
        document.getElementById('space').innerHTML = input
        document.getElementById('cap').innerHTML = "Caps : "+input.toUpperCase()
        document.getElementById('len').innerHTML = "Length : "+input.length
    }

    return (
        <div>
            <input type="text" id='text1' onBlur={Handler2}/>
            <input type="button" value="Say Hello" onClick={Handler1}/>
            <input type="button" value="CapLen" onClick={Handler1}/>
            
            <div id="space"> DEFAULT </div>
            <div id="cap"></div>
            <dev id="len"></dev>
        </div>
    )
}

export function SayHi() {
    return (
        <div>
            <h1>Say Hi</h1>
        </div>
    )
}
