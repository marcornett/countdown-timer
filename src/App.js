import { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import Timer from './Timer'

function App() {
  const [state, setState] = useState({
    event: '',
    optionalTime: '',
  })

  const [thenDate, setThenDate] = useState('')
  const [countdown, setCountDown] = useState('')

  momentDurationFormatSetup(moment)

  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (thenDate.length) {
        const now = moment().format('M/D/YYYY, h:mm:ss')
        let ms = moment(thenDate).diff(moment(now))
        setCountDown(moment.duration(ms).format('D , H, m, s'))
      }
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [thenDate])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleThenDateChange = (e) =>{
    setThenDate(e.target.value)
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
          name="thenDate"
          id=""
          onChange={handleThenDateChange}
          value={thenDate} />
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
        <p>{countdown}</p>
      </form>


    </div>
  );
}

export default App;
