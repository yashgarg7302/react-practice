import {useState} from 'react'
import './App.css'



function App() {
  
 let [counter, setCounter] = useState(15);
 
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
    <h1 class="text-black bg-green-400 text-5xl font-bold underline">REACT HOOKS</h1>
    <h2>Counter value : {counter} </h2>
    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    > remove value</button>
    </>
        
  )
}

export default App
