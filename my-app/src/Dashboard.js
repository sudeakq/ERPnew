import React from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/content';

function Dashboard() {


  return(
    <>
    <Header />
    <div className="container">
      <Sidebar />
      <main>
        <Content />
      </main>
    </div>
  </>

  );
}

export default Dashboard
