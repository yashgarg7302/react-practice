import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

function onClickHandler(){
  setCount(count + 1);
}

return (
  <div> 
     <button onClick={onClickHandler}>Counter{state.count}</button>
  </div>
  )
}
