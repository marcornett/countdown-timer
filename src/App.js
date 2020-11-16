import { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import Timer from './Timer'

function App() {
  const [state, setState] = useState({
    event: '',
    optionalTime: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })

  const [thenDate, setThenDate] = useState('')

  momentDurationFormatSetup(moment)

  useEffect(() => {
    const {optionalTime} = state
    // TODO: Optional date concatenation causes repetitive occurances
    // if(optionalTime.length){
    //   setThenDate(thenDate.concat(' ', optionalTime))
    // }
    let countdownInterval = setInterval(() => {
      if (thenDate.length) {
        
        console.log(thenDate)
        const now = moment().format('M/D/YYYY, h:mm:ss')
        let ms = moment(thenDate).diff(moment(now))
        const countdown = moment.duration(ms).format('D H m s').split(' ')

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
  }, [state, thenDate])

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
          <input
            type="date"
            name="thenDate"
            id=""
            onChange={handleThenDateChange}
            value={thenDate} 
          />
        </label>
        
        <p></p>

        <label>Optional Time:
          <input 
            type="time" 
            name="optionalTime" 
            onChange={handleChange}
            value={state.optionalTime}
            id=""
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
