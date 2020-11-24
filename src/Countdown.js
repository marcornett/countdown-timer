import React from 'react'
import './Countdown.css'

function Countdown({days, hours, minutes, seconds}) {
    return (
        <div className="countdown">
          <div>
            <h2>{days ? days : '00'}</h2>
            days
            </div>
          <div>
            <h2>{hours ? hours : '00'}</h2>
            hours
            </div>
          <div>
            <h2>{minutes ? minutes : '00'}</h2>
            minutes
            </div>
          <div>
            <h2>{seconds ? seconds : '00'}</h2>
            seconds
            </div>
        </div>
    )
}

export default Countdown
