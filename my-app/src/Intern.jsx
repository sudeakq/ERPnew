import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import InternLists from './Components/InternList';

function Intern() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <InternLists />
        </main>
      </div>
    </>
  );
}

export default Intern
