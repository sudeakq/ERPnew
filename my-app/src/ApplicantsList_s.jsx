import React from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ApplicantsList from './Components/ApllicantsList';

function Applicants() {


  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
       <ApplicantsList />
      </div>
    </>

  );
}

export default Applicants