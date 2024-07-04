import React from 'react';
import './dailyremindercard.css';
// i used same css with dailyremindercard becouse the cards are same
import { FaCircle } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const UpcomingBirthdayCard = () => {


    return (
        <div className="daily-reminder-card-frame">
            <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>Ebube Samuel</p>
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

        </div>

    );
};

export default UpcomingBirthdayCard;
