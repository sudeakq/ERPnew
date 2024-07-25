import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ApplicantsForms from './Components/ApplicantForms'; // Corrected import
// Corrected import

function ApplicantsForm() {
  return (
    <>
      <Header />
      <div className="main-container" style={{
          display : "flex",
        }} >
        <Sidebar className="sidebar" />
        <div className="form-container" style={{
          maxWidth : "1000000px",
          width : "100%"
        }} >
          <ApplicantsForms />
        </div>
      </div>
    </>
  );
}

export default ApplicantsForm;
