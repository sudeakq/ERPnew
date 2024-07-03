import React from "react";
import './ReminderClicked.css';

function ReminderClicked(){
  return (
    <div className="total-container">
      <h1 className="title" >What's New</h1>
      <div className="reminder-list">
        <section className="reminder-container">
          <div className="top-inner-container">
            <div className="date">
              <p>
                <p className="date-text" >22 July 2024</p>
                <p className="post-by-text" >Posted By<br></br></p>
                <p className="post-by-text" >Antonio Gallo</p>
              </p>
            </div>
            <div className="text-data">
              <p className="text-title">
                Project Management Presentation 
              </p>
              <p className="text">On monday 23 August there will be a presentation from project management regarding the theater platform. Please prepare the necessary documents.</p> 
            </div>
            <div className="read-link-container">
              <a className="read-link" href="#">
                Read More
              </a>
            </div>
          </div>  
        </section>
        <section className="reminder-container">
          <div className="top-inner-container">
            <div className="date">
              <p>
                <p className="date-text" >22 July 2024</p>
                <p className="post-by-text" >Posted By<br></br></p>
                <p className="post-by-text" >Antonio Gallo</p>
              </p>
            </div>
            <div className="text-data">
              <p className="text-title">
                Project Management Presentation 
              </p>
              <p className="text">On monday 23 August there will be a presentation from project management regarding the theater platform. Please prepare the necessary documents.</p> 
            </div>
            <div className="read-link-container">
              <a className="read-link" href="#">
                Read More
              </a>
            </div>
          </div>  
        </section>
        <section className="reminder-container">
          <div className="top-inner-container">
            <div className="date">
              <p>
                <p className="date-text" >22 July 2024</p>
                <p className="post-by-text" >Posted By<br></br></p>
                <p className="post-by-text" >Antonio Gallo</p>
              </p>
            </div>
            <div className="text-data">
              <p className="text-title">
                Project Management Presentation 
              </p>
              <p className="text">On monday 23 August there will be a presentation from project management regarding the theater platform. Please prepare the necessary documents.</p> 
            </div>
            <div className="read-link-container">
              <a className="read-link" href="#">
                Read More
              </a>
            </div>
          </div>  
        </section>
      </div>
    </div>
  );


}

export default ReminderClicked;