import React from "react";
import "./Sidebar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = ({ selected, setSelected }) => {
  return (
    <aside className="sidebar">
      <nav>
        <div className="link-list">
          <div className="link-container">
            <a href="/dashboard" className="nav-link">
              <div
                onClick={() => setSelected("DashBoard")}
                className={
                  `link-data ` +
                  ` ${selected === "Dashboard" ? " selected " : ""}`
                }
              >
                <i className="fas fa-tachometer-alt"></i>Dashboard
              </div>
            </a>
          </div>

          <div className="link-container">
            <a href="/schedule" className="nav-link">
              <div
                onClick={() => setSelected("Schedule")}
                className={
                  `link-data ` +
                  ` ${selected === "Schedule" ? " selected " : ""}`
                }
              >
                <i className="fas fa-calendar-alt"></i>Schedule
              </div>
            </a>
            <a href="/departments" className="nav-link">
              <div
                onClick={() => setSelected("Departments")}
                className={
                  `link-data ` +
                  ` ${selected === "Departments" ? " selected " : ""}`
                }
              >
                <i className="fas fa-building"></i>Departments
              </div>
            </a>
          </div>

          <div className="link-container">
            <a href="/applicants" className="nav-link">
              <div
                onClick={() => setSelected("New Applicants")}
                className={
                  `link-data ` +
                  ` ${selected === "Applicants" ? " selected " : ""}`
                }
              >
                <i className="fas fa-user-plus"></i>New Applicants
              </div>
            </a>
            <a href="/interns" className="nav-link">
              <div
                onClick={() => setSelected("Interns")}
                className={
                  `link-data ` +
                  ` ${selected === "Interns" ? " selected " : ""}`
                }
              >
                <i className="fas fa-user-graduate"></i>Interns
              </div>
            </a>
            <a href="/alumni" className="nav-link">
              <div
                onClick={() => setSelected("Alumni")}
                className={
                  `link-data ` + ` ${selected === "Alumni" ? " selected " : ""}`
                }
              >
                <i className="fas fa-user-friends"></i>Alumni
              </div>
            </a>
          </div>

          <div className="link-container">
            <a href="/houses" className="nav-link">
              <div
                onClick={() => setSelected("Houses")}
                className={
                  `link-data ` + ` ${selected === "Houses" ? " selected " : ""}`
                }
              >
                <i className="fas fa-home"></i>Houses
              </div>
            </a>
            <a href="/bills" className="nav-link">
              <div
                onClick={() => setSelected("Bills")}
                className={
                  `link-data ` + ` ${selected === "Bills" ? " selected " : ""}`
                }
              >
                <i className="fas fa-file-invoice-dollar"></i>Bills
              </div>
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
