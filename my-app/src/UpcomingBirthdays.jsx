import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Birthdays from './Components/Birthdays';

function UpcomingBirthdays() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <Birthdays />
        </main>
      </div>
    </>
  );
}

export default UpcomingBirthdays;
