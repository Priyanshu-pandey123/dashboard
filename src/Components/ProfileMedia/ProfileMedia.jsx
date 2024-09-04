import React from 'react';
import './ProfileMedia.css';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Snapchat } from '../../assets/snapchat.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitterIcon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtubeIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagramIcon.svg';


const ProfileMedia = () => {
    return (
        <div className='profile-media-container'>
            <h2>Ahana Goyal</h2>
            <h4>@Aanaha_spam</h4>
            <div className='list-conatiner'>
                <LinkedIn />
                <InstagramIcon />
                <Snapchat />
                <TwitterIcon />
                <YoutubeIcon />
            </div>


        </div>
    )
}

export default ProfileMedia;
         {/* <ul className='list'>

                    <li><LinkedIn className="icon" />li</li>
                    <li><LinkedIn className="icon" /></li>
                    <li><LinkedIn className="icon" /></li>
                    <li><LinkedIn className="icon" /></li>
                    <li><LinkedIn className="icon" /></li>

                </ul> */}