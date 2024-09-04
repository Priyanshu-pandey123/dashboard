
import './header.css';
import React from 'react';
import LableIcon from '../LabelIcon/LableIcon';
import { ReactComponent as AppIcon } from '../../assets/apps.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';

const Header = () => {

  return (
    <div className='header-container'>
      <div className='header-title'>
        <span>Welcome, Ahana</span>
      </div>
      <div className='header-icon-label'>
        <LableIcon title="App" Icon={<AppIcon />} />
        <LableIcon title="Instagram" Icon={<Instagram />} customClass="insta" />
        <LableIcon title="Twitter" Icon={<TwitterIcon />} />
        <LableIcon title="Youtube" Icon={<YoutubeIcon />} />
      </div>

    </div>
  )
}

export default Header