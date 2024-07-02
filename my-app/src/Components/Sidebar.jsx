// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {

  const[selected,setSelected] = useState("DashBoard");

  return (
    <aside className="sidebar">
      <nav>
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

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
