import React from 'react';
import './WeeklyScheduleCard.css';
import { FiEdit } from "react-icons/fi";

const WeeklyScheduleCard = ({ startDate, endDate, currentWeekText }) => {
    return (
        <div className='weekly-schedule-card'>
            <div className="weekly-schedule-left">
                <div className="weekly-schedule-left-middle">
                    <p>{startDate}</p>
                    <p>{endDate}</p>
                </div>
            </div>
            <div className="weekly-schedule-middle">
                <p>{currentWeekText}</p>
                <p className='special-clr'>First Shift : 08.00-14.00</p>
                <p className='special-clr'>Second Shift : 14.00-20.00</p>
            </div>
            <div className="weekly-schedule-right">
                <a href='/schedule'>Edit </a>
                <FiEdit style={{ marginLeft: '7px' }} />
            </div>
        </div>
    );
};

export default WeeklyScheduleCard;
