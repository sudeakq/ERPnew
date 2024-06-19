import React from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
// import ApplicantsList from './Components/ApllicantsList';
import ApplicantsForms from './Components/ApllicantForms';

function ApplicantsForm() {


  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <ApplicantsForms />
       {/* <ApplicantsList /> */}
      </div>
    </>

  );
}

export default ApplicantsForm