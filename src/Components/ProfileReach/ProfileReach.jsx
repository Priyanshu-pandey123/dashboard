
import './ProfileReach.css';
import React from 'react';
import pieChart from '../../assets/pieChart.png'

const ProfileReach = () => {
    return (
        <div className='profile-reach-container'>




            <img

                src={pieChart}
                alt='not found'
            />

            {/* 
            <div className='profile-reach-header'>
                <div>Reached</div>
                <div className='profile-reach-option'>
                    <select className='option'>
                        <option>This Months</option>
                    </select>
                </div>

            </div>

            <div>
               // here pie chart will be inserted
            </div> */}
        </div>
    )
}

export default ProfileReach