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
            <div onClick={()=>setSelected("DashBoard")} className={ `link-data ` + ` ${selected === "DashBoard" ? " selected " : "" }` }>
            <i className="fas fa-tachometer-alt"></i><a href="#" className="nav-link" >Dashboard</a>
            </div>
          </li>

          <li className="link-container">
            <div onClick={()=>setSelected("Schedule")} className={ `link-data ` + ` ${selected === "Schedule" ? " selected " : "" }` } >
              <i className="fas fa-calendar-alt" ></i><a href="#" className="nav-link"  >Schedule</a>
            </div>
            <div onClick={()=>setSelected("Departments")} className={ `link-data ` + ` ${selected === "Departments" ? " selected " : "" }` }>
              <i className="fas fa-building"></i><a href="#"  className="nav-link" >Departments</a>
            </div>
          </li>

          <li className="link-container">
            <div onClick={()=>setSelected("New Appca")} className={ `link-data ` + ` ${selected === "New Appca" ? " selected " : "" }` } >
              <i className="fas fa-user-plus"></i><a href="#"  className="nav-link" >New Appca</a>
            </div>
            <div onClick={()=>setSelected("Interns")} className={ `link-data ` + ` ${selected === "Interns" ? " selected " : "" }` } >
              <i className="fas fa-user-graduate"></i><a href="#"  className="nav-link" >Interns</a>
            </div>
            <div onClick={()=>setSelected("Alumni")} className={ `link-data ` + ` ${selected === "Alumni" ? " selected " : "" }` } >
              <i className="fas fa-user-friends"></i><a href="#"  className="nav-link" >Alumni</a>
            </div>
          </li>

          <li className="link-container">
            <div   onClick={()=>setSelected("Houses")} className={ `link-data ` + ` ${selected === "Houses" ? " selected " : "" }` } >
              <i className="fas fa-home"></i><a href="/" className="nav-link" >Houses</a>
            </div>
            <div  onClick={()=>setSelected("Bills")} className={ `link-data ` + ` ${selected === "Bills" ? " selected " : "" }` } >
              <i className="fas fa-file-invoice-dollar"></i><a href="/"  className="nav-link" >Bills</a>
            </div>
          </li>
        </ul>


      </nav>
    </aside>
  );
};

export default Sidebar;
