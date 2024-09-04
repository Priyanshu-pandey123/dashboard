
// import TimeIntervalTab from '../../TimeIntervalTab/TimeIntervalTab';
import SummaryTable from '../ContentSummaryTable/SummaryTable';
import TimeIntervalTab from '../TimeIntervalTab/TimeIntervalTab'
import './ContentSummary.css';
import React from 'react'

const ContentSummary = () => {
    return (
        <div className='content-summary-container'>
            <div className='content-summary-container-header'>
                <div className='header-title'>
                    <span>Content Summary </span>
                </div>
                <div>
                    <TimeIntervalTab />
                </div>
            </div>


            <div className='content-summary-container-table'>
                <SummaryTable />
            </div>



        </div>
    )
}

export default ContentSummary