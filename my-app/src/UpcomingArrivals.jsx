import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Arrivals from './Components/Arrivals';

function UpcomingArrivals() {
  return (
    <>
      <Header />
      <div className="container"  style={{padding:"0px !important"}}>
        <Sidebar />
        <main>
          <Arrivals />
        </main>
      </div>
    </>
  );
}

export default UpcomingArrivals;
