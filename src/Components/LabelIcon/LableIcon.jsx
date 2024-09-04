

import React from 'react';
import "./LabelIcon.css";


const LableIcon = ({ title, Icon, customClass }) => {
    return (
        <div className={`label-icon-container ${customClass || ""}`}>
            <span>{Icon}</span>
            <span className='icon-title'>{title}</span>
        </div>
    )
}

export default LableIcon;