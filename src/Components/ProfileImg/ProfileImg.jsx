import React from 'react';
import './ProfileImg.css';
import profilePic from '../../assets/profilePic.png'


const ProfileImg = () => {
    return (
        <div className='profile-img'>
            <img
                src={profilePic}
                alt='Not found'
            />
        </div>
    )
}

export default ProfileImg