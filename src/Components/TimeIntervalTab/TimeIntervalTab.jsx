
import React from 'react'
import './timeIntervalTab.css'

const TimeIntervalTab = () => {
    return (
        <div className='time-interval-tab-container'>
            <span className='time-interval-tab-container-first'>Daily</span>
            <span className='time-interval-tab-container-middle'>Monthly</span>
            <span className='time-interval-tab-container-last'>Weekly</span>
        </div>
    )
}

export default TimeIntervalTab