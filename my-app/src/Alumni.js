import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import Alumni from './Components/AlumniList';

function AlumniL() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <Alumni />
        </main>
      </div>
    </>
  );
}

export default AlumniL
