import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';

import WeeklySchedule from './Components/WeeklySchedule';

function Schedule() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <WeeklySchedule />
        </main>
      </div>
    </>
  );
}

export default Schedule
