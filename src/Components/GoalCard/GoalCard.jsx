import React from 'react';
import "./GoalCard.css";

const GoalCard = ({ totalCount, label, icon = null, goalAchieved, isActive }) => {
  return (<div className='card-wrapper'>
    <div className={`goal-card ${isActive ? "is-active" : ""}`}>
      <div className='goal-card-header'>
        <div className='goal-card-header-title'>
          <span className='goal-card-count'>
            {totalCount.toLocaleString('en-US')}
          </span>
          <span className='goal-card-label'>
            {label}
          </span>
        </div>
        {icon && <div className='goal-card-header-icon'>
          {icon}
        </div>}
      </div>
      <div className='goal-card-acheive'>
        <div className='goal-card-achieve-header'>
          <span className='goal-card-achieve-title'>
            Goal Achieved
          </span>
          <span className='goal-card-achieve-value'>
            {goalAchieved}%
          </span>
        </div>
        <div className='goal-card-progress'>
          <div className='goal-card-progress-value' style={{ width: `${goalAchieved}%` }}>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GoalCard;
































