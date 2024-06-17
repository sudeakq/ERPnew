import React from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import Events from './Components/UpcomingEvents';

function DailyReminders() {


  return(
    <>
    <Header />
    <div className="container">
      <Sidebar />
      <main>
        <Events />
      </main>
    </div>
  </>

  );
}

export default DailyReminders
