import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import HousesL from './Components/HousesList';

function House() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <HousesL />
        </main>
      </div>
    </>
  );
}

export default House
