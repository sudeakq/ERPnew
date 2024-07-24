import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ApplicantsContainer } from './NewApplicants.style';

function NewApplicants({applicants,setApplicants}) {

  return (
    <ApplicantsContainer>
      <header>
        <h1>Applicants List</h1>
        <div className="headerk-actions">
          <input type="text" placeholder="Sort by:" />
          <button>CSV Import</button>
          <a href='/applicantForm' ><button>Add Candidate</button></a>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Applicant</th>
            <th>Progress Date</th>
            <th>Department</th>
            <th>Position</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant)=>{

            const {name,surname} = applicant;
            const {date,progress,status} = applicant.progress;
          
            return(
              <tr>
                <td><input type="checkbox" /></td>
                <td>{name} {surname}</td>
                <td>{date}</td>
                <td>{applicant.department.name}</td>
                <td>{applicant.position.name}</td>
                <td>{progress}</td>
                <td><span className={` status ${status === "Pending" ? "pending" : status === "On-Board" ? "on-board" : status === "Accepted" ? "accepted" : status === "Rejected" ? "rejected" : status === "Ending" ? "ending" : "" } `}>{status}</span></td>
                <td><button className="action-btn">...</button></td>
              </tr>    
            )
          })}
        </tbody>
      </table>
    </ApplicantsContainer>
  );
}

export default NewApplicants;
