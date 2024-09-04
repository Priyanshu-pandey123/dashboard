import React from 'react'
import './ProfileHeader.css'
import { ReactComponent as Noti } from '../../assets/notifications_unread.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import { ReactComponent as More } from '../../assets/more_vert.svg';
// C: \Users\Priyanshu\OneDrive\Desktop\Projects\dashboard\src\assets\edit.svg

const ProfileHeader = () => {
    return (
        <div className='profile-header'>
            <div className='profile-header-noti-icon'>
                <span><Noti /></span>
                <span>Notification</span>
            </div>
            <div className='profile-header-noti-left-icon'>
                <div className='icon'>
                    <Edit />
                </div>
                <div className='icon'>
                    <More />
                </div>


            </div>
        </div>
    )
}

export default ProfileHeader