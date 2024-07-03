// src/Content.js
import React from 'react';
import './content.css';
import DashCard from './DashCard';
import { FaArrowRightLong } from "react-icons/fa6";
import WeeklyScheduleCard from './WeeklyScheduleCard';
import DailyReminderCard from './DailyReminderCard';

const Content = () => {
  return (
    <div className='content-container'>
      <div className="content-container-left">

        {/* What's New? Section starts*/}
        <div className='content-container-top'>
          <h4>What's New?</h4>
          <div className='view-all'>
            <a href="./" >View All (18) </a>
            <p className='view-all-arrow'><FaArrowRightLong /></p>
          </div>
        </div>
        <DashCard day="Fri" number={15} description="Project Management" backgroundColor="rgba(115, 86, 255, 1)" />
        <DashCard day="Sat" number={16} description="New Arrival" backgroundColor="rgba(78, 151, 232, 1)" />
        <DashCard day="Sun" number={17} description="Interview" backgroundColor="rgba(76, 139, 210, 1)" />
        {/* What's New? Section ends*/}

        {/* Weekly Schedule Section starts*/}
        <div className='content-container-top' style={{ marginTop: '30px' }}>
          <h4>Weekly Schedule</h4>
          <div className='view-all'>
            <a href="./" >View All </a>
          </div>
        </div>
        <WeeklyScheduleCard></WeeklyScheduleCard>
        {/* Weekly Schedule Section ends*/}
      </div>
      <div className='content-container-right'>
        <div className='content-container-top'>
          <h4>Daily Reminder</h4>
          <div className='view-all'>
            <a href="./" >View All (12)</a>
          </div>
        </div>
        <DailyReminderCard />
      </div>
    </div>
  );
};

export default Content;


