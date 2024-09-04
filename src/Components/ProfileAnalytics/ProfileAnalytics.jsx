import React from 'react'
import "./ProfileAnalytics.css";
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileImg from '../ProfileImg/ProfileImg';
import ProfileMedia from '../ProfileMedia/ProfileMedia';
import ProfileData from '../ProfileData/ProfileData';

export const ProfileAnalytics = () => {
    return (
        <div className='profile-analytics'>
            <ProfileHeader />
            <div className='profile-analytic-bottom-wrapper'>
                <ProfileImg />
                <ProfileMedia />
                <ProfileData />
           </div>
        </div>
    )
};
