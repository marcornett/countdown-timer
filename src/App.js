import { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import Timer from './Timer'

function App() {
  const [state, setState] = useState({
    event: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })

  const [inputDate, setInputDate] = useState('')

  momentDurationFormatSetup(moment)

  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (inputDate.length) {
        
        const now = moment().format('M/D/YYYY, h:mm:ss')

        // console.log({now})
        // console.log({inputDate})
        let ms = moment(inputDate).diff(moment(now))
        // TODO: countdown should be a object
        const countdown = moment.duration(ms).format('D H m s').split(' ')
        // TODO: add each value backwards and assign appropriate key names,
        // TODO: if not enough values, default to 0
        const countdownObj = {}
        
        setState({
          ...state,
          days: countdown[0],
          hours: countdown[1],
          minutes: countdown[2],
          seconds: countdown[3],
        })
      }
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [state, inputDate])

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
    setInputDate(e.target.value)
  }
  
  const {days, hours, minutes, seconds, event} = state
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

        <label>Date: 
          {/* <input
            type="date"
            name="thenDate"
            id=""
            onChange={handleThenDateChange}
            value={thenDate} 
          /> */}

        <input 
          type="datetime-local" 
          name="thenDate" 
          id="" 
          onChange={handleThenDateChange}
          value={inputDate} 
        />
        </label>
      </form>

   
    <Timer 
      days={days} 
      hours={hours} 
      minutes={minutes} 
      seconds={seconds}
      event={event}
    />
    </div>
  );
}

export default App;
