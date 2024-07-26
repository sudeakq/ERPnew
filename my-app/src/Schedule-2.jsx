import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import WeeklyScheduleView from './Components/WeeklySchedule-2';
import axios from 'axios';

function ScheduleView() {
  
  const[selected,setSelected] = useState("Schedule");

  const [students,setStudents] = useState({
    morningStudents : [],
    afternoonStudents : []
  });

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    (async () => {
      const response = await axios.get("http://localhost:8000/api/students/departments");
      if(response.status){

        setStudents((v)=>({
          ...v,
          morningStudents : response.data[0]
        }))
        setStudents((v)=>({
          ...v,
          afternoonStudents : response.data[1]
        }))
      }
    })();

  },[])

  useEffect(()=>{
    if(students.afternoonStudents.length) setLoading(false);
  },[students])

  if(loading) return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <div>Loading...</div>
        </main>
      </div>
    </>
   
  )

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <WeeklyScheduleView {...{students}} /> 
          {/* <WeeklySchedule /> */}
        </main>
      </div>
    </>
  );
}

export default ScheduleView
