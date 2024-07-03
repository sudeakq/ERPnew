import React from 'react';
import './dashcard.css';

const DashCard = (props) => {
    const { day, number, description, backgroundColor, color } = props;
    const cardStyle = {
        backgroundColor: backgroundColor,
        color: color
    };

    return (
        <div className="dashcard-rectangle" style={cardStyle}>
            <div className='dashcard-left-section'>
                <p>{day}</p>
                <p>{number}</p>
            </div>
            <div className='dashcard-middle-section'>
                <p>{description}</p>
            </div>
            <div className='dashcard-right-section'>
                <p>Read More</p>
            </div>
        </div>
    );
};

export default DashCard;
