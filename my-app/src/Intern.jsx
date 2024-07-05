import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css'; 
import InternLists from './Components/InternList'; 

function Intern() {
  
  const [selected,setSelected] = useState("Interns")

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <InternLists />
        </main>
      </div>
    </>
  ); 
} 

export default Intern
