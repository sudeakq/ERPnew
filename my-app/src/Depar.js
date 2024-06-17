import React from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/content';
import deparss from './Components/deparss';

function Depar() {


  return(
    <>
    <Header />
    <div className="container">
      <Sidebar />
      <main>
        <deparss />
      </main>
    </div>
  </>

  );
}

export default Depar
