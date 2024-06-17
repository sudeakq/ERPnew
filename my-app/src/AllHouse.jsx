import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import AllHous from './Components/AllHouse';

function AllHouse() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <AllHous />
        </main>
      </div>
    </>
  );
}

export default AllHouse
