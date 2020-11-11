import { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import Timer from './Timer'

function App() {
  const [currTime, setTime] = useState('')
  const [event, setEvent] = useState('')

  const current = new Date()

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const then = moment()
  }

  const handleEventChange = (e) => {
    setEvent(e.target.value)
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>

        <span>Event: </span>
        <input type="text" onChange={handleEventChange} value={event} />
        <p></p>

        <span>Date: </span>
        <input type="date" name="" id="" />
        <p></p>

        <span>Optional time: </span>
        <input type="text" />

        <p><input type="submit" value="Start" /></p>
      </form>

      <div>Time: {currTime}</div>
    </div>
  );
}

export default App;
