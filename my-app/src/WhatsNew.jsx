import React from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import DailyReminder from './Components/DailyReminder';

function WhatsNew() {

  return(
    <>
    <Header />
    <div className="container">
      <Sidebar />
      <main>
        <DailyReminder />
      </main>
    </div>
  </>

  );
}

export default WhatsNew
