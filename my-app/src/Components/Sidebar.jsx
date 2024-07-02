import React from 'react';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="link-container">
            <a className="nav-link" href="#dashboard">
              <i className="fas fa-tachometer-alt"></i>Dashboard
            </a>
          </li>
          <li className="link-container">
            <a className="nav-link" href="#schedule">
              <i className="fas fa-calendar-alt"></i>Schedule
            </a>
          </li>
          <li className="link-container">
            <a className="nav-link" href="#departments">
              <i className="fas fa-building"></i>Departments
            </a>
          </li>
          <li className="link-container">
            <a className="nav-link" href="#new-applicants">
              <i className="fas fa-user-plus"></i>New Applicants
            </a>
          </li>
          <li className="link-container">
            <a className="nav-link" href="#interns">
              <i className="fas fa-user-graduate"></i>Interns
            </a>
          </li>
          <li className="link-container">
            <a className="nav-link" href="#alumni">
              <i className="fas fa-user-friends"></i>Alumni
            </a>
          </li>
          <li className="link-container">
            <a className="nav-link" href="#houses">
              <i className="fas fa-home"></i>Houses
            </a>
          </li>
          <li className="link-container">
            <a className="nav-link" href="#bills">
              <i className="fas fa-file-invoice-dollar"></i>Bills
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
