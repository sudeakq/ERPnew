import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import AllHouse from './Components/AllHouses';

function AllHous() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <AllHouse />
        </main>
      </div>
    </>
  );
}

export default AllHous
