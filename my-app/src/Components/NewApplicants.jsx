import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ApplicantsContainer } from './NewApplicants.style';

function NewApplicants({applicants,setApplicants}) {

  const [canUpdate,setCanUpdate] = useState(-1);

  const [selectedDate,setSelectedDate] = useState();
  
  const [selectedProgress,setSelectedProgress] = useState("New Applicant");

  const [progressesData,setProgressesData] = useState([
    "New Applicant",
    "Acceptance Letter",
    "Learning Agreement",
    "HR Interview",
    "CEO Interview",
    "Final Interview",
    "Waiting for Grant",
    "Accepted",
    "Rejected",
  ]);

  const [selectedStatus,setSelectedStatus] = useState("Pending");

  const [statusData,setStatusData] = useState([
    "Pending",
    "On-Board",
    "Rejected",
    "Accepted",
    "Ending"
  ]);

  const handleUpdate = async (applicant) => {

    const {progress_id} = applicant;

    console.log(selectedDate,selectedProgress,selectedStatus)

    try {
      const response = await axios.put(`http://localhost:8000/api/progresses/${progress_id}`,{
        "date" : selectedDate,
        "progress" : selectedProgress,
        "status" : selectedStatus,
      }) 
  
      if(response.status) window.location.reload();
      else console.log('fail')
      
    } catch (error) {
      console.log(error)
    }

  }

  const handleChange = (e,setData) => {
    setData(e.target.value);
  }

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
          {applicants.map((applicant,index)=>{

            const {name,surname} = applicant;
            const {date,progress,status} = applicant.progress;
          
            return(
              <tr>
                {canUpdate !== index && (<td style={{padding : " 0 21px "}} ><input type="checkbox" /></td>)  || canUpdate === index && ( <td style={{with : "50px"}} ><button onClick={()=>handleUpdate(applicant)} >Save</button></td> )}
                <td>{name} {surname}</td>
                {canUpdate !== index && (<td style={{width : "170px"}} >{date}</td>)  || canUpdate === index && ( <td><input onChange={(e)=>handleChange(e,setSelectedDate)} type='date' placeholder={date} /></td> )}
                <td>{applicant.department.name}</td>
                <td>{applicant.position.name}</td>
                {canUpdate !== index && (
                  <td style={{width : "200px"}} >{progress}</td>
                )  
                  || canUpdate === index && 
                ( 
                  <td>
                    <select onChange={(e)=>handleChange(e,setSelectedProgress)} >
                        {progressesData.map((data)=>(
                          <option value={data}>{data}</option>
                        ))}
                      </select>
                  </td> 
                )}
                {canUpdate !== index && (
                  <td style={{width : "200px"}} >
                    <span 
                      className={` status ${status === "Pending" ? "pending" : status === "On-Board" ? "on-board" : status === "Accepted" ? "accepted" : status === "Rejected" ? "rejected" : status === "Ending" ? "ending" : "" } `}
                    >
                      {status}
                    </span>
                  </td>)  
                    || canUpdate === index && 
                  (
                    <td>
                      <select onChange={(e)=>handleChange(e,setSelectedStatus)} >
                        {statusData.map((data)=>(
                          <option value={data}>{data}</option>
                        ))}
                      </select>
                    </td> 
                  )}
                <td><button 
                  onClick={()=>setCanUpdate(()=>{
                  if(index === canUpdate) return -1;
                  setSelectedDate(date)
                  setSelectedProgress(progress)
                  setSelectedStatus(status)
                  return index;
                })} className="action-btn">...</button></td>
              </tr>    
            )
          })}
        </tbody>
      </table>
    </ApplicantsContainer>
  );
}

export default NewApplicants;
