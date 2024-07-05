import React from 'react';
import './upcomingarrivalcard.css';
// i used same css with dailyremindercard becouse the cards are same
import { AiOutlineClockCircle } from "react-icons/ai";

const UpcomingArrivalCard = () => {


    return (
        <div className="daily-reminder-card-frame">
            <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>Ebube Samuel</p>
                        <p style={{ color: "gray" }}>ICT</p>
                    </div>
                </div>
                <div className='daily-reminder-card-middle' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>Arriving</p>
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
                <div className='daily-reminder-card-middle' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>Departing</p>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>12 June</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>

            </div>

            <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>John Doe</p>
                        <p style={{ color: "gray" }}>HR</p>
                    </div>
                </div>
                <div className='daily-reminder-card-middle' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>Departing</p>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>13 September</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>

            </div>

        </div>

    );
};

export default UpcomingArrivalCard;
