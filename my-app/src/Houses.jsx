import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import HousesL from './Components/HousesList';

function House() {

  const [selected,setSelected] = useState('Houses')

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <HousesL />
        </main>
      </div>
    </>
  );
}

export default House
