import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import Bill from './Components/Bill';

function Bills() {

  const [selected,setSelected] = useState("Bills")

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <Bill />
        </main>
      </div>
    </>
  );
}

export default Bills