import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import Alumni from './Components/AlumniList';

function AlumniL() {

  const [selected,setSelected] = useState("Alumni")

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <Alumni />
        </main>
      </div>
    </>
  );
}

export default AlumniL
