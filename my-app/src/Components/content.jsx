// src/Content.js
import React from 'react';
import './content.css';

const Content = () => {
  return (
    <div className="container">
      
      <div className="main">
        <div className="header">
          <div className="date">01 September 2021</div>
          <div className="user">Ebube Samuel</div>
        </div>
        <div className="content">
          <div className="left-column">
            <div className="whats-new">
              <div className="title">What's New</div>
              <div className="view-all">View All (18) →</div>
              <div className="cards">
                <div className="card">Project Management</div>
                <div className="card">New Arrival</div>
                <div className="card">Interview</div>
              </div>
            </div>
            <div className="weekly-schedule">
              <div className="title">Weekly Schedule</div>
              <div className="view-all">View All →</div>
              <div className="card">
                Morning shift 8:00 to 13:00
                <ul>
                  <li>Isata Sajoir Bah</li>
                  <li>Katerina Savarova</li>
                  <li>Klara Tlaskalova</li>
                  <li>Marvelous Orewolua Oseyemi</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="daily-reminder">
              <div className="title">Daily Reminder</div>
              <div className="view-all">View All (12) →</div>
              <ul>
                <li>HR Presentation</li>
                <li>HR Interview: Wilson</li>
                <li>HR Interview: Samara</li>
              </ul>
            </div>
            <div className="upcoming">
              <div className="title">Upcoming Arrival and Departure</div>
              <div className="view-all">View All (8) →</div>
              <ul>
                <li>Marcus Botosh - Arriving</li>
                <li>Talan Carder - Departing</li>
                <li>Jordyn Dias - Project Management</li>
              </ul>
            </div>
            <div className="birthdays">
              <div className="title">Upcoming Birthdays</div>
              <ul>
                <li>Ebube Samuel - Today</li>
                <li>Klara Tlaskalova - 13 September</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
