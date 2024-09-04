import React from 'react';
import "./DashboardAnalytics.css";
import GoalCardContainer from '../GoalCardContainer/GoalCardContainer';
import Header from '../Header/Header';
import EngagementContainer from '../EngagementContainer/EngagementContainer';
import ProfileReach from '../ProfileReach/ProfileReach';
import ContentSummary from '../contentSummary/ContentSummary';


function DashboardAnalytics() {
    return (
        <div className='dashboard-analytics'>
            <Header />
            <GoalCardContainer />
            <div className='wrapper'>
                <EngagementContainer />
                <ProfileReach />
            </div>
            <ContentSummary />
        </div>
    )
}

export default DashboardAnalytics