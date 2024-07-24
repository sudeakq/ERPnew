import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import AllHouse from './Components/AllHouses';

function AllHous() {

  const [selected,setSelected] = useState("Houses")

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <AllHouse />
        </main>
      </div>
    </>
  );
}

export default AllHous
