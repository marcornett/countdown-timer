import { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import Timer from './Timer'

function App() {
  const [currTime, setTime] = useState('')
  const [state, setState] = useState({
    event: '',
    date: '',
    optionalTime: '',
  })

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000)
  }, [])

  const current = new Date()

  const handleSubmit = (e) => {
    e.preventDefault()
    const then = moment()
  }

  const handleChange = (e) => {
    console.log(e.target.name)
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
    console.log(state)
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>

        <label>Event: </label>
        <input
          type="text"
          name="event"
          onChange={handleChange}
          value={state.event} />
        <p></p>

        <label>Date: </label>
        <input
          type="date"
          name="date"
          id=""
          onChange={handleChange}
          value={state.date} />
        <p></p>

        <label>Optional Time:
        <input
            type="text"
            name="optionalTime"
            onChange={handleChange}
            value={state.optionalTime} />
        </label>

        <p>
          <input
            type="submit"
            value="Start" />
        </p>
      </form>

      <div>Time: {currTime}</div>

      <Timer />
    </div>
  );
}

export default App;
