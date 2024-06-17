import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import Bill from './Components/Bill';

function Bills() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <Bill />
        </main>
      </div>
    </>
  );
}

export default Bills