import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import AllHouses from './Components/AllHouses';

function AllHous() {

  const [selected,setSelected] = useState("Houses")

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <AllHouses />
        </main>
      </div>
    </>
  );
}

export default AllHous
