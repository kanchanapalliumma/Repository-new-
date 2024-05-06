import { useState } from "react"
import TodoItem from "../TodoItem"

export default function Todo(){
    const [Todo,setTodo]=useState("")
    const [todos,setTodos]=useState([])
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos,Todo])
        setTodo("")
        // console.log(todos)   
    }
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            value={Todo}
          ></input>
          <button type="submit">Follow Me</button>
          {console.log(todos)}
        </form>
        {todos.map((item) => (
          <TodoItem key={item} item={item}></TodoItem>
          //   <h1 key={item}>{item}</h1>
        ))}
        {/* {todos.map((item) => (
          <h1 key={item}>{item}</h1>
        ))} */}
      </div>
    );
}