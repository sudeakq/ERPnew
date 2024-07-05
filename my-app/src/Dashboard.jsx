import React, { useState } from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/content';

function Dashboard() {

  const [selected,setSelected] = useState("Dashboard")

  return(
    <>
    <Header />
    <div className="container">
      <Sidebar {...{selected,setSelected}} />
      <main>
        <Content />
      </main>
    </div>
  </>

  );
}

export default Dashboard
