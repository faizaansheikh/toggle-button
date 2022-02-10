import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ONIMAGE from "../src/onn.png"
import OfIMAGE from "../src/off.png"

function App() {

   const [color,setcolor] = useState(false)
   const [bulb,setbulb] = useState(false)

   const colorSwitch = () => color? setcolor(false) : setcolor(true);
   const bulbSwitch = () => bulb? setbulb(false) : setbulb(true);
   

  return (
    <>
    <div className={color? "classchange" : "classnotchange"}>
   <h1 className={color? "nothead" : "head"}>Toggle switch</h1>
   <button onClick={colorSwitch}>switch</button>
   <button onClick={bulbSwitch}>bulb</button>
      <img src={bulb? ONIMAGE : OfIMAGE} alt="" width="200px"/>
      
   </div>
   </>
  );
}

export default App;
