import React, { useEffect, useState } from "react";
/* import "./WeeklySchedule-2.css"; */
import { ScheduleContainer } from "./WeeklySchedule-2.style";

function WeeklyScheduleView({students}) {

  const [departments,setDepartments] = useState({
    morning : [
      [ "Human Resources", students.morningStudents.filter((student)=>student.department.name === "Human Resources" )],
      [ "Data Analyst", students.morningStudents.filter((student)=>student.department.name === "Data Analyst" )],
      [ "Digital Marketing", students.morningStudents.filter((student)=>student.department.name === "Digital Marketing" )],
      [ "Copy Writer", students.morningStudents.filter((student)=>student.department.name === "Copy Writer" )],
      [ "Growth Hacker", students.morningStudents.filter((student)=>student.department.name === "Growth Hacker" )],
      [ "Business Project Management", students.morningStudents.filter((student)=>student.department.name === "Business Project Management" )],
      [ "Architecture & Urban Design", students.morningStudents.filter((student)=>student.department.name === "Architecture & Urban Design" )],
      [ "Information Technology", students.morningStudents.filter((student)=>student.department.name === "Information Technology" )],
      [ "User Experience Designer", students.morningStudents.filter((student)=>student.department.name === "User Experience Designer" )],
      [ "European Project Manager", students.morningStudents.filter((student)=>student.department.name === "European Project Manager" )],
      [ "Business Lawyer", students.morningStudents.filter((student)=>student.department.name === "Business Lawyer" )],
    ],
    afternoon : [
      [ "Human Resources", students.afternoonStudents.filter((student)=>student.department.name === "Human Resources" )],
      [ "Data Analyst", students.afternoonStudents.filter((student)=>student.department.name === "Data Analyst" )],
      [ "Digital Marketing", students.afternoonStudents.filter((student)=>student.department.name === "Digital Marketing" )],
      [ "Copy Writer", students.afternoonStudents.filter((student)=>student.department.name === "Copy Writer" )],
      [ "Growth Hacker", students.afternoonStudents.filter((student)=>student.department.name === "Growth Hacker" )],
      [ "Business Project Management", students.afternoonStudents.filter((student)=>student.department.name === "Business Project Management" )],
      [ "Architecture & Urban Design", students.afternoonStudents.filter((student)=>student.department.name === "Architecture & Urban Design" )],
      [ "Information Technology", students.afternoonStudents.filter((student)=>student.department.name === "Information Technology" )],
      [ "User Experience Designer", students.afternoonStudents.filter((student)=>student.department.name === "User Experience Designer" )],
      [ "European Project Manager", students.afternoonStudents.filter((student)=>student.department.name === "European Project Manager" )],
      [ "Business Lawyer", students.afternoonStudents.filter((student)=>student.department.name === "Business Lawyer" )],
    ],
  })

  useEffect(()=>{
    console.log(departments)
  },[departments])

  return (
    <ScheduleContainer>
      <header className="header-week">
        <h1>Weekly Schedule</h1>
        <div className="header-right">
          <button className="nav-button">&#x25C0;</button>
          <span className="date">20 July 2022</span>
          <button className="nav-button">&#9654;</button>
        </div>
      </header>

      <main className="schedule-container">
        <section className="shift" id="morning-shift">
          <h2>Morning shift 8:00 to 13:00</h2>
            {  
              departments.morning.map((data)=>{
                if(data[1].length)
                return (
                  <div className="group">
                    <h3>{data[0]}</h3>
                    <ul>
                      {data[1].map((innerData)=>{
                        return(
                          <li>{innerData.name}</li>
                      )
                    })}
                    </ul>
                  </div>
                )
              })
            }
        </section>
        <button className="edit">&#8644;</button>
        <section className="shift" id="afternoon-shift">
          <h2>Afternoon shift 13:00 to 18:00</h2>
          {  
              departments.afternoon.map((data)=>{
                if(data[1].length)
                return (
                  <div className="group">
                    <h3>{data[0]}</h3>
                    <ul>
                      {data[1].map((innerData)=>{
                        return(
                          <li>{innerData.name}</li>
                      )
                    })}
                    </ul>
                  </div>
                )
              })
            }
        </section>
      </main>
    </ScheduleContainer>
  );
}

export default WeeklyScheduleView