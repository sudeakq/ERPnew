import React, { useState } from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import NewApplicants from './Components/NewApplicants';

function Applicants() {

  const [selected,setSelected] = useState("Applicants")

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
       <NewApplicants />
      </div>
    </>

  );
}

export default Applicants
