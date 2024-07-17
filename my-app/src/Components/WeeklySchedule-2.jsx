import React, { useEffect, useState } from "react";
/* import "./WeeklySchedule-2.css"; */
import { ScheduleContainer } from "./WeeklySchedule-2.style";

function WeeklyScheduleView({students}) {
  
  useEffect(()=>{
    console.log()
  },[])

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
          <div className="group">
            <h3>Human Resources: 4</h3>
            <ul>
              {students.morningStudents.filter((student)=>student.department.name === "Human Resources" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>Data Analyst: 4</h3>
            <ul>
              {students.morningStudents.filter((student)=>student.department.name === "Data Analyst" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>Digital Marketing: 3</h3>
            <ul>
              {students.morningStudents.filter((student)=>student.department.name === "Digital Marketing" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>Copy Writer: 1</h3>
            <ul>
              {students.morningStudents.filter((student)=>student.department.name === "Copy Writer" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>Growth Hacker: 1</h3>
            <ul>
              <li>Akif Kilic</li>
            </ul>
          </div>
          <div className="group">
            <h3>Business Project Management: 3</h3>
            <ul>
              {students.morningStudents.filter((student)=>student.department.name === "Business Project Management" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>Architecture & Urban Design: 1</h3>
            <ul>
              {students.morningStudents.filter((student)=>student.department.name === "Architecture & Urban Design" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>

        </section>
        <button className="edit">&#8644;</button>
        <section className="shift" id="afternoon-shift">
          <h2>Afternoon shift 13:00 to 18:00</h2>
          <div className="group">
            <h3>Information Technology: 13</h3>
            <ul>
              {students.afternoonStudents.filter((student)=>student.department.name === "Information Technology" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>Human Resources: 6</h3>
            <ul>
              {students.afternoonStudents.filter((student)=>student.department.name === "Human Resources" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>User Experience Designer: 1</h3>
            <ul>
              {students.afternoonStudents.filter((student)=>student.department.name === "User Experience Designer" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>European Project Manager: 5</h3>
            <ul>
              {students.afternoonStudents.filter((student)=>student.department.name === "European Project Manager" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="group">
            <h3>Business Lawyer: 1</h3>
            <ul>
              {students.afternoonStudents.filter((student)=>student.department.name === "Business Lawyer" ).map((data)=>{
                return (
                  <li>{data.name}</li>
                )
              })}
            </ul>
          </div>
        </section>
      </main>
    </ScheduleContainer>
  );
}

export default WeeklyScheduleView