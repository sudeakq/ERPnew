import dashboard_logo from "../images/Dashboard.png";
import Calendar from "../images/Calendar.png";
import list from "../images/List_ul.png";
import Home from "../images/home.png";
import Rectangle from "./Components/Rectangle";
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
          <p className={selectedId === 1 ? " selectedTitle" : "unSelected"}>
            Dashboard
          </p>
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
          <p className={selectedId === 2 ? " selectedTitle" : "unSelected"}>
            Schedule
          </p>
        </div>
        <div
          className="Departments sidebar-menu"
          onClick={() => {
            handleSelect(3);
          }}
        >
          <Rectangle id={3} selectedId={selectedId} />
          <img src={Calendar} alt="" className="icons" />
          <p className={selectedId === 3 ? " selectedTitle" : "unSelected"}>
            Departments
          </p>
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
          <p className={selectedId === 4 ? " selectedTitle" : "unSelected"}>
            New Applicants
          </p>
        </div>
        <div
          className="Interns sidebar-menu"
          onClick={() => {
            handleSelect(5);
          }}
        >
          <Rectangle id={5} selectedId={selectedId} />
          <img src={list} alt="" className="icons" />
          <p className={selectedId === 5 ? " selectedTitle" : "unSelected"}>
            Interns
          </p>
        </div>
        <div
          className="Alumni sidebar-menu"
          onClick={() => {
            handleSelect(6);
          }}
        >
          <Rectangle id={6} selectedId={selectedId} />
          <img src={list} alt="" className="icons" />
          <p className={selectedId === 6 ? " selectedTitle" : "unSelected"}>
            Alumni
          </p>
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
          <p className={selectedId === 7 ? " selectedTitle" : "unSelected"}>
            Houses
          </p>
        </div>
        <div
          className="Bills sidebar-menu"
          onClick={() => {
            handleSelect(8);
          }}
        >
          <Rectangle id={8} selectedId={selectedId} />
          <img src={list} alt="" className="icons" />
          <p className={selectedId === 8 ? " selectedTitle" : "unSelected"}>
            Bills
          </p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
