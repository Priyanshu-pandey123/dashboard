import React from 'react';
import './ProfileData.css';
import dataPic from '../../assets/Vector1.png'

const ProfileData = () => {
  return (
    <div className='profile-data-container'>
      <div className='profile-data-header'>
        <div className='header-value'><span>Total Revenue</span></div>
        <div className='profile-data-header-select'>
          <select className='header-select'>
            <option>This months</option>
          </select></div>
      </div>
      <div className='profile-data-footer'>
        <div className='profile-data-number'>
          <p>29.9%</p>
          <span>5641494</span>
        </div>
        <div className='profile-data-footer-image'>
          <img
            src={dataPic}
            alt='not found'

          />
        </div>
      </div>
    </div>
  )
}

export default ProfileData