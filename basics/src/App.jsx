import {useState} from 'react'



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
    <h1>REACT HOOKS</h1>
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
