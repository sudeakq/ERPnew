import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css'; 
import NewsText from './Components/NewsText.jsx'; 

function Intern() {
  
  const [selected,setSelected] = useState("News")

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <NewsText />
        </main>
      </div>
    </>
  ); 
} 

export default Intern
