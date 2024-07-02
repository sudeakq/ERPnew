// src/Content.js
import React from 'react';
import './content.css';
import DashCard from './DashCard';
import { FaArrowRightLong } from "react-icons/fa6";

const Content = () => {
  return (
    <div className="content-container">
      <div className='content-container-top'>
        <h4>What's New?</h4>
        <div>
          <a href="./" style={{ marginBottom: '100px' }}>View All (18) </a>
          <FaArrowRightLong />
        </div>
      </div>
      <DashCard day="Fri" number={15} description="Project Management" backgroundColor="rgba(115, 86, 255, 1)" />
      <DashCard day="Sat" number={16} description="New Arrival" backgroundColor="rgba(78, 151, 232, 1)" />
      <DashCard day="Sun" number={17} description="Interview" backgroundColor="rgba(76, 139, 210, 1)" />
    </div>
  );
};

export default Content;


