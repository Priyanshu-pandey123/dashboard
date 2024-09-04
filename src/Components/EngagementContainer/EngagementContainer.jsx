
import './EngagementContainer.css'
import React from 'react'
import TimeIntervalTab from '../TimeIntervalTab/TimeIntervalTab'
import graph from '../../assets/graph.png'

const EngagementContainer = () => {
    return (
        <div className='enagagement-conatiner'>
            <div className='enagagement-conatiner-header'>
                <div className='enagagement-conatiner-header-title'>
                    <span>Engagement Rate</span>
                </div>
                <div className='enagagement-conatiner-header-time-bar'>
                    <TimeIntervalTab />
                </div>
            </div>
            <div className='enagagement-conatiner-graph'>
                <img
                    src={graph}
                    alt="not found"
                />

            </div>
            <div className='enagagement-conatiner-footer'>
                <span>Week1</span>
                <span>Week2</span>
                <span>Week3</span>
                <span>Week4</span>
            </div>
        </div>
    )
}

export default EngagementContainer