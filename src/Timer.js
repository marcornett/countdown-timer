import React from 'react'
import './Timer.css'

function Timer({days, hours, minutes, seconds, event}) {
    return (
        <div>
            <h4>{event}</h4>
            <h2>{days || 0} days</h2>
            <h2>{hours || 0} hours</h2>
            <h2>{minutes || 0} minutes</h2>
            <h2>{seconds || 0} seconds</h2>
        </div>
    )
}

export default Timer
