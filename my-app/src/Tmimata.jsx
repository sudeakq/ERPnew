import React from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/content';
import Tmimatas from './Components/Tmimatas';

function Tmimata() {


  return(
    <>
    <Header />
    <div className="container">
      <Sidebar />
      <main>
        <Tmimatas />
      </main>
    </div>
  </>

  );
}

export default Tmimata
