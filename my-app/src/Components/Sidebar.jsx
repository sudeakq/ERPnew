import React from 'react';
import './Sidebar.css';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Sidebar = () => {

  const[selected,setSelected] = useState("DashBoard");

  return (
    <aside className="sidebar">
      <nav>
        <ul className='link-list' >

          <li className="link-container">
            <div className={ `link-data ` + ` ${selected === "DashBoard" ? " selected " : "" }` }>
            <i className="fas fa-tachometer-alt"></i><a href="#" onClick={()=>setSelected("DashBoard")} className="nav-link" >Dashboard</a>
            </div>
          </li>

          <li className="link-container">
            <div className={ `link-data ` + ` ${selected === "Schedule" ? " selected " : "" }` } >
              <i className="fas fa-calendar-alt" ></i><a href="#" onClick={()=>setSelected("Schedule")} className="nav-link"  >Schedule</a>
            </div>
            <div className={ `link-data ` + ` ${selected === "Departments" ? " selected " : "" }` }>
              <i className="fas fa-building"></i><a href="#" onClick={()=>setSelected("Departments")} className="nav-link" >Departments</a>
            </div>
          </li>

          <li className="link-container">
            <div className={ `link-data ` + ` ${selected === "New Appca" ? " selected " : "" }` } >
              <i className="fas fa-user-plus"></i><a href="#" onClick={()=>setSelected("New Appca")} className="nav-link" >New Appca</a>
            </div>
            <div className={ `link-data ` + ` ${selected === "Interns" ? " selected " : "" }` } >
              <i className="fas fa-user-graduate"></i><a href="#" onClick={()=>setSelected("Interns")} className="nav-link" >Interns</a>
            </div>
            <div className={ `link-data ` + ` ${selected === "Alumni" ? " selected " : "" }` } >
              <i className="fas fa-user-friends"></i><a href="#" onClick={()=>setSelected("Alumni")} className="nav-link" >Alumni</a>
            </div>
          </li>

          <li className="link-container">
            <div className={ `link-data ` + ` ${selected === "Houses" ? " selected " : "" }` } >
              <i className="fas fa-home"></i><a href="#" onClick={()=>setSelected("Houses")} className="nav-link" >Houses</a>
            </div>
            <div className={ `link-data ` + ` ${selected === "Bills" ? " selected " : "" }` } >
              <i className="fas fa-file-invoice-dollar"></i><a href="#" onClick={()=>setSelected("Bills")} className="nav-link" >Bills</a>
            </div>
          </li>
        </ul>


      </nav>
    </aside>
  );
};

export default Sidebar;
