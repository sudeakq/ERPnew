import React from 'react';
import './WeeklyScheduleCard.css';

const WeeklyScheduleCard = () => {


    return (
        <div className='weekly-schedule-card'>
            <div className="weekly-schedule-left">
                <div className="weekly-schedule-left-top"><p>20 July 2022</p></div>
                <div className="weekly-schedule-left-middle"><p>posted by</p>
                    <p>Antonio Gallo</p></div>
                <div className="weekly-schedule-left-bottom"></div>
            </div>
            <div className="weekly-schedule-middle">
                <p>Morning Shift</p>
                <p>8:00 to 13.00</p>
                <p>Human Resources:4</p>
                <ul>
                    <li>Isata Sajor Bah</li>
                    <li>Katerina Svarcova</li>
                    <li>Klara Tlaskova</li>
                    <li>Marvellous Oreoluwa Oseyemi</li>
                </ul>
            </div>
            <div className="weekly-schedule-right">
                <p>Read More</p>

            </div>

        </div>
    );
};

export default WeeklyScheduleCard;
