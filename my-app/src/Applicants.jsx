import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import NewApplicants from './Components/NewApplicants';
import axios from 'axios';

function Applicants() {

  const [selected,setSelected] = useState("Applicants")

  const [applicants, setApplicants] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    (async ()=>{
      const response = await axios.get("http://localhost:8000/api/students/applicant");
      if(response.status){
        setApplicants(response.data);
      }
    })();
  },[]);

  useEffect(()=>{
    if(applicants.length) setLoading(false)
  },[applicants])

  if(loading) 
    return (
      <>
        <Header />
        <div className="container">
          <Sidebar {...{selected,setSelected}} />
          <p>Loading...</p>
        </div>
      </>
    );

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <NewApplicants {...{applicants,setApplicants}} />
      </div>
    </>
  );
}

export default Applicants
