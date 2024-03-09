import {useEffect,useState} from "react"
import axios from "axios"
export default function App() {

  return(
    <div>
      <Todo id = {1}/>
    </div>  
  )
}

function Todo({id}) {
  const [todos, setTodos] = useState({})
  const getTodos = async ()=>{
    const res = await axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    console.log(res.data.todo)
    setTodos(res.data.todo)
  }
  useEffect(()=>{
    getTodos()
  },[])

  return(
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  )
}
umakant3525 commented on Feb 4
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
const [selectedId, setSelectedId] = useState(1);

return (

<button onClick={() => setSelectedId(1)}>1
<button onClick={() => setSelectedId(2)}>2
<button onClick={() => setSelectedId(3)}>3
<button onClick={() => setSelectedId(4)}>4


);
}
function Todo({ id }) {
const [todos, setTodos] = useState({});

const getTodos = async () => {
try {
const res = await axios.get(https://sum-server.100xdevs.com/todo?id=${id});
console.log(res.data.todo);
setTodos(res.data.todo);
} catch (error) {
console.error("Error fetching data:", error);
}
};

useEffect(() => {
getTodos();
}, [id]); // here dependencies is id here
// here when id changes then the useeffect works

return (

{todos.title}

{todos.description}


);
}
