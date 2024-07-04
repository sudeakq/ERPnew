import React from 'react';
import './dailyremindercard.css';
import { FaCircle } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const DailyReminderCard = () => {


    return (
        <div className="daily-reminder-card-frame">
            <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <FaCircle style={{ color: "red", margin: "10px" }}></FaCircle>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>HR Presentation</p>
                        <p style={{ color: "gray" }}>HR</p>
                    </div>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>Tomorrow</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>

            </div>
            <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <FaCircle style={{ color: "orange", margin: "10px" }}></FaCircle>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>HR Interview: Wilson</p>
                        <p style={{ color: "gray" }}>HR</p>
                    </div>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>10 September 2021</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>

            </div>
            <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <FaCircle style={{ color: "orange", margin: "10px" }}></FaCircle>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>HR Interview:Samara</p>
                        <p style={{ color: "gray" }}>HR</p>
                    </div>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>12 September 2021</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>

            </div>

        </div>

    );
};

export default DailyReminderCard;
