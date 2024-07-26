import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ApplicantsContainer } from './NewApplicants.style';
import { useNavigate } from 'react-router-dom';

function NewApplicants({currentPage}) {

  const navigate = useNavigate();

  const [paginateData,setPaginateData] = useState({})
  const [applicants, setApplicants] = useState([]);
  const [loading,setLoading] = useState(true);

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

  useEffect(()=>{
    (async ()=>{
      const response = await axios.get(`http://localhost:8000/api/students/applicant?page=${currentPage}`);
      if(response.status){
        if(!response.data.data.length) {
          navigate("/applicants/1")
          window.location.reload()
        }
        setPaginateData(response.data);
        setApplicants(response.data.data)
      }
    })();
  },[]);

  useEffect(()=>{
    if(applicants.length) setLoading(false)
  },[applicants])

  useEffect(()=>{
    console.log(paginateData)
  },[paginateData])

  const handleUpdate = async (applicant) => {

    const {progress_id} = applicant;

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

  const goNext = () => {
    if(paginateData.next_page_url) {
      navigate(`/applicants/${parseInt(currentPage) + 1}`)
      window.location.reload()
    }
  }

  const goPrev = () => {
    if(paginateData.prev_page_url) {
      navigate(`/applicants/${parseInt(currentPage) - 1}`)
      window.location.reload()
    }
  }

  if(loading) 
    return (
      <>
        <div className="container">
          <p>Loading...</p>
        </div>
      </>
    );

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
                {canUpdate !== index && (<td style={{width : "170px"}} >{date}</td>)  || canUpdate === index && ( <td><input value={selectedDate} onChange={(e)=>handleChange(e,setSelectedDate)} type='date' placeholder={date} /></td> )}
                <td>{applicant.position.department.name}</td>
                <td>{applicant.position.name}</td>
                {canUpdate !== index && (
                  <td style={{width : "200px"}} >{progress}</td>
                )  
                  || canUpdate === index && 
                ( 
                  <td>
                    <select value={selectedProgress} onChange={(e)=>handleChange(e,setSelectedProgress)} >
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
                      <select value={selectedStatus} onChange={(e)=>handleChange(e,setSelectedStatus)} >
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
      <div className='buttons-container' >
        {paginateData.prev_page_url && (<button onClick={goPrev} >prev</button>)}
        {paginateData.next_page_url && (<button onClick={goNext} >next</button>)}
      </div>
    </ApplicantsContainer>
  );
}

export default NewApplicants;
