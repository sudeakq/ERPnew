import React from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import NewApplicants from './Components/NewApplicants';

function Applicants() {


  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
       <NewApplicants />
      </div>
    </>

  );
}

export default Applicants
