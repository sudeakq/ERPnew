<<<<<<< Updated upstream
// src/components/Sidebar.js
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> Stashed changes
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {

  const[selected,setSelected] = useState("DashBoard");

  return (
    <aside className="sidebar">
      <nav>
<<<<<<< Updated upstream
        <ul className='link-list' >

          <li className="link-container">
            <a href="#" onClick={()=>setSelected("DashBoard")} className={ `nav-link ` + ` ${selected === "DashBoard" ? " selected " : "" }` } >Dashboard</a>
          </li>

          <li className="link-container">
            <a href="#" onClick={()=>setSelected("Schedule")} className={ `nav-link ` + ` ${selected === "Schedule" ? " selected " : "" }` } >Schedule</a>
            <a href="#" onClick={()=>setSelected("Departments")} className={ `nav-link ` + ` ${selected === "Departments" ? " selected " : "" }` } >Departments</a>
          </li>

          <li className="link-container">
            <a href="#" onClick={()=>setSelected("New Appca")} className={ `nav-link ` + ` ${selected === "New Appca" ? " selected " : "" }` } >New Appca</a>
            <a href="#" onClick={()=>setSelected("Interns")} className={ `nav-link ` + ` ${selected === "Interns" ? " selected " : "" }` } >Interns</a>
            <a href="#" onClick={()=>setSelected("Alumni")} className={ `nav-link ` + ` ${selected === "Alumni" ? " selected " : "" }` } >Alumni</a>
          </li>

          <li className="link-container">
            <a href="#" onClick={()=>setSelected("Houses")} className={ `nav-link ` + ` ${selected === "Houses" ? " selected " : "" }` } >Houses</a>
            <a href="#" onClick={()=>setSelected("Bills")} className={ `nav-link ` + ` ${selected === "Bills" ? " selected " : "" }` } >Bills</a>
          </li>

=======
        <ul>
          <li><i className="fas fa-tachometer-alt"></i>Dashboard</li>
          <li><i className="fas fa-calendar-alt"></i>Schedule</li>
          <li><i className="fas fa-building"></i>Departments</li>
          <li><i className="fas fa-user-plus"></i>New Applicants</li>
          <li><i className="fas fa-user-graduate"></i>Interns</li>
          <li><i className="fas fa-user-friends"></i>Alumni</li>
          <li><i className="fas fa-home"></i>Houses</li>
          <li><i className="fas fa-file-invoice-dollar"></i>Bills</li>
>>>>>>> Stashed changes
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
