import { useState } from "react"

export default function New(){
    const [newone,Updatenew]=useState("")
    const [news,update]=useState([])
    // function Handle(e){
    //     // e.preventDefault();
    //     Updatenew(e.target.value)
    //     // console.log(...Updatenew,newone)
    // }
    function submithandle(e){
        e.preventDefault()
        update([...news,newone])
        Updatenew("")
    }
    return (
      <div>
        <form onSubmit={(e) => submithandle(e)}>
          <input
            type="text"
            onChange={(e) => Updatenew(e.target.value)}
            value={newone}
          ></input>
          <button type="submit">Click Me</button>
          {/* {console.log(news)} */}
        </form>
        {news.map((items) => (
          <h1 key={items}>{items}</h1>
        ))}
      </div>
    );
}