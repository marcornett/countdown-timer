import { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

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

  momentDurationFormatSetup(moment)

  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (inputDate.length) {

        const now = moment().format('M/D/YYYY, h:mm:ss A')
        const ms = moment(inputDate).diff(moment(now))
        const countdown = moment.duration(ms).format('D H m s')
        const countdownList = countdown.split(' ').reverse()
        console.log(countdownList)

        // TODO: Stop setting date if countdown reaches a negative number
        setState({
          ...state,
          countdown: countdownList,
          days: countdownList[3] || '0',
          hours: countdownList[2] || '0',
          minutes: countdownList[1] || '0',
          seconds: countdownList[0] || '0',
        })
      }
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [state, inputDate])

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleThenDateChange = (e) => {
    setInputDate(e.target.value)
  }
  const { countdown, days, hours, minutes, seconds, event } = state
  return (
    <div className="App">
      <h2
        className="countdown__event"
        onChange={handleChange}
      // TODO contentEditable: npm react-contenteditable
      >
        Event Here
      </h2>
      <div className="countdown__parent">
        <div className="countdown">
          <div>{days ? days : '0'}
            <br />
            days
            </div>
          <div>{hours ? hours : '0'}
            <br />
            hours
            </div>
          <div>{minutes ? minutes : '0'}
            <br />
            minutes
            </div>
          <div>{seconds ? seconds : '0'}
            <br />
            seconds
            </div>
        </div>

      </div>
      <div className="date__parent">
        <label htmlFor="" className="date__label">
          {event}
          <input
            type="datetime-local"
            name="thenDate"
            className="date__input"
            onChange={handleThenDateChange}
            value={inputDate}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
