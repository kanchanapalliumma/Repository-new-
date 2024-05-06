import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from "./Hello";
import Fruits from './components/Fruits'
import ConditionComponent from './components/ConditionalComponent'
import Function from './components/Function'
import ClassHandling from './components/Class'
import Counter from './components/Counter';
import ChangeHandle from './components/Form';
import Form from './components/Form';


function App() {
 const person={
    name:"Rob",
    message:"Hi there!",
    emoji:"ufff", 
    // seatNumber={seatNumber}
    seatNumber:[1,2,3,,4],
  }
  const countries=[
    "india",
    "Europe",
    "Africa",
    "North America",
    "South America",
  ]
  const currencies={
    AUD : "Australian",
    CHF: "Swiss France",
    INR:"Indian Rupee",
    CNY:"Yuan",
    EGP:"Egyptian Pound",
    EUR:"Euro",
    GBP:"Pound Sterling",
  }
  const fruits=["Apples","Mango","Orange","Banana"]

  return (
    <div className="App">
      {/* <Hello person={person} countries={countries} currencies={currencies} fruits={fruits}></Hello> */}
      <Hello name="mango" color="yellow"></Hello>
      {/* <Fruits></Fruits> */}
      {/* <ConditionComponent></ConditionComponent> */}
      {/* <Fruits></Fruits> */}
      {/* <Function/> */}
      {/* <ClassHandling/> */}
      {/* <Counter/> */}
      {/* <Form/> */}

      </div>
  );
}

export default App;
