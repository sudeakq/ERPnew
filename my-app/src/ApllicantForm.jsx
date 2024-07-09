import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ApplicantsForms from './Components/ApllicantForms'; // Corrected import
// Corrected import

function ApplicantsForm() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar className="sidebar" />
        <div className="form-container">
          <ApplicantsForms />
        </div>
      </div>
    </>
  );
}

export default ApplicantsForm;
