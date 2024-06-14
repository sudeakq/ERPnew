import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import WeeklyScheduleView from './Components/WeeklySchedule-2';

function ScheduleView() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <WeeklyScheduleView />
        </main>
      </div>
    </>
  );
}

export default ScheduleView
