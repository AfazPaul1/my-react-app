function App() {
    // let message = 'hello there'
    // if (Math.random() > 0.5) {
    //     message="bye there"
    // }
    // return <h1>{new Date().toLocaleTimeString()}</h1>
    const name ="Afaz"
    const age = 23
    const inputType="number"
    const minValue=5
    return (
    <div>
         <h1>My name is {name} {age}</h1>
         <textarea autoFocus  name="" id=""></textarea>
         <input type={inputType} min={minValue} max={10} />
    </div>
    
        )
}

const message = "Hi"

export default App;
export {message};