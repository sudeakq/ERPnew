import React from "react";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import BiancoHouse from './Components/BiancoHouse';



function BiancoHouses(){

  return(
    <>
     <Header />
      <div className="container">
        <Sidebar />
        <main>
          <BiancoHouse />
        </main>
      </div>

    </>
  );
}

export default BiancoHouses