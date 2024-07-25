import React from 'react';
import './dailyremindercard.css';
// I used the same CSS as dailyremindercard because the cards are the same
import { AiOutlineClockCircle } from "react-icons/ai";

const UpcomingBirthdayCard = () => {
    return (
        <div className="daily-reminder-card-frame">
            <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>Sandeep Gautam</p>
                        <p style={{ color: "gray" }}>ICT</p>
                    </div>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>Today</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>
            </div>
            <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>Sude Akgün</p>
                        <p style={{ color: "gray" }}>IT</p>
                    </div>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>26 May</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>
            </div>
            {/* <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>Infinity</p>
                        <p style={{ color: "gray" }}>HR</p>
                    </div>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>31 August</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>
            </div> */}
        </div>
    );
};

export default UpcomingBirthdayCard;
