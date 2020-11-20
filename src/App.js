import { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import Timer from './Timer'

function App() {
  const [state, setState] = useState({
    event: '',
    countdown: '',
  })

  const [inputDate, setInputDate] = useState('')

  momentDurationFormatSetup(moment)

  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (inputDate.length) {
        
        const now = moment().format('M/D/YYYY, h:mm:ss')
        const ms = moment(inputDate).diff(moment(now))
        const countdown = moment.duration(ms).format('D [days] H [hours] m [minutes] s [seconds]')

        const countdownList = countdown.split(' ')
        
        setState({
          ...state,
          countdown: countdownList,
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
  
  const {countdown, event} = state
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

        <div>
          {countdown ? 
            countdown.map((unit, i)=>(
              <div key={i} class={i + 1}>{unit}</div>
            ))
          : null}
        </div>
    </div>
  );
}

export default App;
