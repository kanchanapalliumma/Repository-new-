import { useState } from "react"

export default function Form(){
    const [count,setcount]=useState("")
    function changeHandle(e){
        setcount(e.target.value)
    }
    return <div>
        <input onChange={(e)=>{
            changeHandle(e)
        }}
         type="text"
          value={count}></input>
    </div>
}