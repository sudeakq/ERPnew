import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import WeeklyScheduleView from './Components/WeeklySchedule-2';

function ScheduleView() {
  
  const[selected,setSelected] = useState("Schedule");

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <WeeklyScheduleView />
        </main>
      </div>
    </>
  );
}

export default ScheduleView
