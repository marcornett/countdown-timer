import { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import Timer from './Timer'

function App() {
  const [currTime, setTime] = useState('')
  const [state, setState] = useState({
    event: '',
    optionalTime: '',
  })

  const [thenDate, setThenDate] = useState('')
  const [calcDate, setCalcDate] = useState('')

  const [countdown, setCountdown] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })

  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (calcDate.length) {
        const now = moment()
        console.log('now:', now.toString())
        console.log('thenDate:', thenDate)
        console.log('calcDate:', calcDate)
        const countdown = moment(thenDate - now)

        const days = countdown.format('DD')
        const hours = countdown.format('HH')
        const minutes = countdown.format('mm')
        const seconds = countdown.format('ss')

        setCountdown({
          ...countdown,
          days,
          hours,
          minutes,
          seconds,
        })
      }

      // setTime(new Date().toLocaleString())
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [state.thenDate, countdown])

  const handleSubmit = (e) => {
    e.preventDefault()
    // const thenDate = moment(state.date, "YYYY-MM-DD")
    // setState({
    //   ...state,
    //   thenDate
    // })
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleThenDateChange = (e) =>{
    let date = new Date(e.target.value)
    setCalcDate(date)
    const now = moment().format('M/D/YYYY, h:mm:ss')
    console.log(date.toLocaleString())
    console.log(now)
    console.log(date.toLocaleDateString() - now.toLocaleString())
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
      </form>

      {/* <Timer /> */}
    </div>
  );
}

export default App;
