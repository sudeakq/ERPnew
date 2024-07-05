import React, { useState } from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/content';
import Departments from './Components/Departments';

function Tmimata() {

  const [selected,setSelected] = useState("Departments")

  return(
    <>
    <Header />
    <div className="container">
      <Sidebar {...{selected,setSelected}} />
      <main>
        <Departments />
      </main>
    </div>
  </>

  );
}

export default Tmimata
