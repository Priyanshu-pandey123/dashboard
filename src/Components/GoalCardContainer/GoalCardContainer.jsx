import React from 'react';
import "./GoalCardContainer.css";
import GoalCard from '../GoalCard/GoalCard';
import { ReactComponent as GroupIcon } from "../../assets/group.svg";
import { ReactComponent as FavIcon } from "../../assets/favorite.svg";
import { ReactComponent as PostIcon } from "../../assets/shadow_add.svg";

function GoalCardContainer() {

    const goalItems = [
        {
            totalCount: 12856,
            label: "total followers",
            goalAchieved: 38,
            icon: <GroupIcon />,
            isActive: true,
        },
        {
            totalCount: 51258354,
            label: "total likes",
            goalAchieved: 79,
            icon: <FavIcon />,
        },
        {
            totalCount: 2579,
            label: "total posts",
            goalAchieved: 38,
            icon: <PostIcon />,
        }
    ]




    return (
        <div className="goal-cards-container">
            {goalItems.map((goalItem) => {
                return (<GoalCard totalCount={goalItem.totalCount}
                    label={goalItem.label}
                    isActive={goalItem.isActive}
                    goalAchieved={goalItem.goalAchieved}
                    icon={goalItem.icon}
                />)
            })}
        </div>
    )
}

export default GoalCardContainer;