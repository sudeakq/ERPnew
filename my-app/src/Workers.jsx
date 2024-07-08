import React, { useState } from 'react'
import Header from './Components/Header';
import WorkersData from './Components/WorkersData';
import Sidebar from './Components/Sidebar';

function Workers() {

    const [selected,setSelected] = useState("Departments");

    return(
      <>
        <Header />
        <div className="container">
          <Sidebar {...{selected,setSelected}} />
          <main>
            <WorkersData />
          </main>
      </div>
      </>
  
    );

}

export default Workers
