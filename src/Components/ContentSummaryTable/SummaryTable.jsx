
import './SummaryTable.css';
import React from 'react';
import Img1 from '../../assets/Rectangle1.png';
import Img2 from '../../assets/Rectangle2.png';
import Img3 from '../../assets/Rectangle3.png';
import goal from '../../assets/Vector1.png';

const SummaryTable = () => {
    const data = [
        {
            id: 1,
            postImg: Img1,
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            views: '10,25,48,341',
            reactions: '9,23,652',
            shares: '9,23,652',
            duration: '3 Weeks',
            brand: 'Nike',
            goalsImg: goal,
        },
        {
            id: 2,
            postImg: Img2,
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            views: '10,25,48,341',
            reactions: '9,23,652',
            shares: '9,23,652',
            duration: '3 Weeks',
            brand: 'Nike',
            goalsImg: goal,
        },
        {
            id: 3,
            postImg: Img3,
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            views: '10,25,48,341',
            reactions: '9,23,652',
            shares: '9,23,652',
            duration: '3 Weeks',
            brand: 'Nike',
            goalsImg: goal,
        },


    ];

    return (
        <div className='summary-table'>
            <table>
                <thead>
                    <tr>
                        <th>Post</th>
                        <th>Caption/Description</th>
                        <th>Views</th>
                        <th>Reactions</th>
                        <th>Shares</th>
                        <th>Duration</th>
                        <th>Associated Brand</th>
                        <th>Goals</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td><img src={item.postImg} alt="Post" /></td>
                            <td className='caption'>{item.caption}</td>
                            <td>{item.views}</td>
                            <td>{item.reactions}</td>
                            <td>{item.shares}</td>
                            <td>{item.duration}</td>
                            <td>{item.brand}</td>
                            <td><img src={item.goalsImg} alt="Goals Graph" /></td>
                            <td><button className="action-button">⋮</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SummaryTable