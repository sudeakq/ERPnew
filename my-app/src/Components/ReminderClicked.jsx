import React, { useCallback, useState } from "react";
import { ReminderClickedContainer } from "./ReminderClicked.style";
import leftIcon from '../images/chevron-left-solid.svg'
import rightIcon from '../images/chevron-right-solid.svg'

function ReminderClicked(){

  const [totalPage,setTotalPage] = useState(4);
  const [currentPage,setCurrentPage] = useState(1);

  return (
    <ReminderClickedContainer>
    <div className="total-container">
      <h1 className="title" >What's News</h1>
      <button class="edit-button">✎</button>
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
      <div className="buttons-container poppins-extrabold">
        <img className="icon" src={leftIcon} />
        {/* left arrow icon */}
        {currentPage} / {totalPage}
        {/* right arrow icon */}
        <img className="icon" src={rightIcon} />
      </div>
    </div>
    </ReminderClickedContainer>
  );


}

export default ReminderClicked;