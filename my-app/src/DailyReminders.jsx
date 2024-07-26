import React from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import Reminders from './Components/Reminders';
import { useParams } from 'react-router-dom';

function DailyReminders() {

  const currentPage = (useParams()).id || 1;

  return(
    <>
      <Header />
      <div className="container" style={{padding:"0px !important"}}>
        <Sidebar />
        <main>
          <Reminders {...{currentPage}} />
        </main>
      </div>
    </>
  );
}

export default DailyReminders
