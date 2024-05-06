import { useState } from "react"

export default function Counter(){
    const [count,statecount]=useState(0);
    const [incresedby,setincresedby]=useState(5); 
     function increment(){
        statecount(count+incresedby)
    }
    function decrement(){
        statecount(count-incresedby)
    }
    function countincrement(){
        setincresedby(incresedby+2)
    }
    function countdecrement(){
        setincresedby(incresedby-3)
    }
    
    return <div>
        <div>The count is:{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h1>The value is incresed by: {incresedby}</h1>
        <button onClick={countincrement}>count increase</button>
        <button onClick={countdecrement}>count decrease</button>
        </div>
}