import React from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import Reminders from './Components/Reminders';

function DailyReminders() {


  return(
    <>
    <Header />
    <div className="container">
      <Sidebar />
      <main>
        <Reminders />
      </main>
    </div>
  </>

  );
}

export default DailyReminders