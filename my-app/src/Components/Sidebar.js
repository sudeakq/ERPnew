// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Schedule</li>
          <li>Departments</li>
          <li>New Applicants</li>
          <li>Interns</li>
          <li>Alumni</li>
          <li>Houses</li>
          <li>Bills</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
