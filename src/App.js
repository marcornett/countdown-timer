import { useState, useEffect, useRef } from 'react';
import './App.css';
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import ContentEditable from 'react-contenteditable'
import Countdown from './Countdown'

function App() {
  const [state, setState] = useState({
    event: '',
    countdown: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })

  const [inputDate, setInputDate] = useState('')

  const text = useRef('Event')

  const editableChange = (event) => {
    text.current = event.target.value
  }
  const handleThenDateChange = (e) => {
    setInputDate(e.target.value)
  }

  momentDurationFormatSetup(moment)

  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (inputDate.length) {

        const now = moment().format('M/D/YYYY, h:mm:ss A')
        const ms = moment(inputDate).diff(moment(now))
        const countdown = moment.duration(ms).format('DD HH mm ss')
        const countdownList = countdown.split(' ').reverse()

        // TODO: Stop setting date if countdown reaches a negative number
        setState({
          ...state,
          countdown: countdownList,
          days: countdownList[3] || '00',
          hours: countdownList[2] || '00',
          minutes: countdownList[1] || '00',
          seconds: countdownList[0] || '00',
        })
      }
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [state, inputDate])


  const { countdown, days, hours, minutes, seconds, event } = state
  return (
    <div className="App">
      <div className="date__parent">
        <label htmlFor="" className="date__label">
          {text.current}
          <input
            type="datetime-local"
            name="thenDate"
            className="date__input"
            onChange={handleThenDateChange}
            value={inputDate}
          />
        </label>
      </div>
      
      <ContentEditable 
        html={text.current}
        disabled={false}
        onChange={editableChange}
        tagName='h1'
        className="countdown__event"
      />
        <Countdown 
          days={days} 
          hours={hours} 
          minutes={minutes} 
          seconds={seconds} 
        />
    </div>
  );
}

export default App;
