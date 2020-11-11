import { useState, useEffect } from 'react';
import './App.css';
import Timer from './Timer'

function App() {
  const [currTime, setTime] = useState()
  const current = new Date()
  const date = `${current.getMonth()}/${current.getDate()}/${current.getFullYear()}`
  
  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleString())
    }, 1000)
  },[])
  
  
  return (
    <div className="App">
      <span>Event:</span>
      <input type="text"/>
      <input type="date" name="" id=""/>
      <span>Optional time:</span>
      <input type="text"/>
      <button>Start</button>
      <div>Date: {date}</div>
      <div>Time: {currTime}</div>
    </div>
  );
}

export default App;
