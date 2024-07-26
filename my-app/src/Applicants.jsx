import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import NewApplicants from './Components/NewApplicants';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Applicants() {

  const [selected,setSelected] = useState("Applicants")

  const currentPage = (useParams()).id || 1;

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <NewApplicants {...{currentPage}} />
      </div>
    </>
  );
}

export default Applicants
