import dashboard_logo from "../images/Dashboard.png";
import Calendar from "../images/Calendar.png";
import list from "../images/List_ul.png";
import Home from "../images/home.png";
import down_blueLine from "../images/down-blue-line.png";
import Rectangle from "./Rectangle";
import "./Sidebar.css";
import { useState } from "react";
function Sidebar() {
  const [selectedId, setSelectedId] = useState(1);
  function handleSelect(id) {
    setSelectedId(id);
  }
  return (
    <div className="Sidebar">
      <div className="dashboard Sidebar-list">
        <div
          className="sidebar-menu"
          onClick={() => {
            handleSelect(1);
          }}
        >
          <Rectangle id={1} selectedId={selectedId} />
          <img src={dashboard_logo} alt="" className="icons" />
          <p className={selectedId === 1 && "selected"}>Dashboard</p>
        </div>
      </div>
      <div className="date Sidebar-list">
        <div
          className="Schedule sidebar-menu"
          onClick={() => {
            handleSelect(2);
          }}
        >
          <Rectangle id={2} selectedId={selectedId} />
          <img src={Calendar} alt="" className="icons" />
          <p className={selectedId === 2 && "selected"}>Schedule</p>
        </div>
        <div
          className="Departments sidebar-menu"
          onClick={() => {
            handleSelect(3);
          }}
        >
          <Rectangle id={3} selectedId={selectedId} />
          <img src={Calendar} alt="" className="icons" />
          <p className={selectedId === 3 && "selected"}>Departments</p>
        </div>
      </div>
      <div className="side-3 Sidebar-list">
        <div
          className="New_Applicants sidebar-menu"
          onClick={() => {
            handleSelect(4);
          }}
        >
          <Rectangle id={4} selectedId={selectedId} />
          <img src={list} alt="" className="icons" />
          <p className={selectedId === 4 && "selected"}>New Applicants</p>
        </div>
        <div
          className="Interns sidebar-menu"
          onClick={() => {
            handleSelect(5);
          }}
        >
          <Rectangle id={5} selectedId={selectedId} />
          <img src={list} alt="" className="icons" />
          <p className={selectedId === 5 && "selected"}>Interns</p>
        </div>
        <div
          className="Alumni sidebar-menu"
          onClick={() => {
            handleSelect(6);
          }}
        >
          <Rectangle id={6} selectedId={selectedId} />
          <img src={list} alt="" className="icons" />
          <p className={selectedId === 6 && "selected"}>Alumni</p>
        </div>
      </div>
      <div className="side-4 Sidebar-list">
        <div
          className="Houses sidebar-menu"
          onClick={() => {
            handleSelect(7);
          }}
        >
          <Rectangle id={7} selectedId={selectedId} />
          <img src={Home} alt="" className="icons" />
          <p className={selectedId === 7 && "selected"}>Houses</p>
        </div>
        <div
          className="Bills sidebar-menu"
          onClick={() => {
            handleSelect(8);
          }}
        >
          <Rectangle id={8} selectedId={selectedId} />
          <img src={list} alt="" className="icons" />
          <p className={selectedId === 8 && "selected"}>Bills</p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
