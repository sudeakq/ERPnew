import React from "react";
import './ApllicantsList.css';



const ApplicantsList = () => {
  const applicants = [
    { name: 'Sandeep Gautam', department: 'ICT', position: 'Deep Palace', start: '8.05.2024', end: '5.08.2024', status: 'new', created: '-', actions: '-' },
    { name: 'Argyro Karachaliou', department: 'HR Management', position: '-', start: '18.03.2024', end: '30.05.2024', status: 'new', created: '-', actions: '-' },
    { name: 'Jeffrey Ackah Blay', department: 'HR Management', position: '-', start: '18.04.2024', end: '19.07.2024', status: 'hr. interview', created: '-', actions: '-' },
    { name: 'Eneada Sulaj', department: 'Business & Data Analyst', position: '-', start: '20.04.2024', end: '30.07.2024', status: 'manager interview', created: '-', actions: '-' },
    { name: 'Alejandro Lopez Perez', department: 'Project Management', position: '-', start: '30.04.2024', end: '30.09.2024', status: 'unsuccessful', created: '-', actions: '-' },
    { name: 'Camille Dauches', department: 'Languages', position: '-', start: '7.05.2024', end: '31.07.2024', status: 'new', created: '-', actions: '-' },
    { name: 'Busra Yildiz', department: 'Urban Design', position: '-', start: '12.05.2024', end: '20.08.2024', status: 'CEO interview', created: '-', actions: '-' },
    { name: 'Busra Yildiz', department: 'Law', position: '-', start: '19.05.2024', end: '15.08.2024', status: 'arrival', created: '-', actions: '-' },
  ];

  return (
    <div className="app">
      <headerk>
        <h1>Applicants</h1>
        <div className="controls">
          <button className="csv-import">CSV Import</button>
          <button className="add-candidate">Add Candidate</button>
        </div>
      </headerk>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={index}>
              <td>{applicant.name}</td>
              <td>{applicant.department}</td>
              <td>{applicant.position}</td>
              <td>{applicant.start}</td>
              <td>{applicant.end}</td>
              <td>{applicant.status}</td>
              <td>{applicant.created}</td>
              <td>{applicant.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default  ApplicantsList

