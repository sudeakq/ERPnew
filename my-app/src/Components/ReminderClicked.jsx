import React, { useState } from "react";
import { ReminderClickedContainer } from "./ReminderClicked.style";
import leftIcon from "../images/chevron-left-solid.svg";
import rightIcon from "../images/chevron-right-solid.svg";
import EditForm from "./EditForm"; // Ensure this path is correct

function ReminderClicked() {
  const [isEditing, setIsEditing] = useState(false); // State for edit form visibility
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 4; // Assuming 4 total pages

  const [reminders, setReminders] = useState([
    {
      date: "22 July 2024",
      postedBy: "Antonio Gallo",
      title: "Project Management Presentation",
      description:
        "On Monday 23 August there will be a presentation from project management regarding the theater platform. Please prepare the necessary documents.",
    },
    {
      date: "27 August 2024",
      postedBy: "Antonio Gallo",
      title: "Sandeep Gautam Birthday Celebration",
      description:
        "On Monday 23 August there will be a presentation from project management regarding the theater platform. Please prepare the necessary documents.",
    },
    {
      date: "27 August 2024",
      postedBy: "Sandeep Gautam",
      title: "Independence Day Parade",
      description:
        "On Monday 23 August there will be a presentation from lorem lorem lorem.",
    },
    // Add more reminder objects here
  ]);

  const handleEditClick = () => setIsEditing(true);
  const handleCloseForm = () => setIsEditing(false);

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFormSubmit = (newData) => {
    // Handle the form submission, e.g., add new reminder
    setReminders([...reminders, newData]); // Append new reminder data
    handleCloseForm(); // Close form after submission
  };

  const renderReminders = () => {
    const startIndex = (currentPage - 1) * 3; // Assuming 3 reminders per page
    const endIndex = Math.min(currentPage * 3, reminders.length);
    return reminders.slice(startIndex, endIndex).map((reminder, index) => (
      <section className="reminder-container" key={index}>
        <div className="top-inner-container">
          <div className="date">
            <p className="date-text">{reminder.date}</p>
            <p className="post-by-text">Posted By</p>
            <p className="post-by-text">{reminder.postedBy}</p>
          </div>
          <div className="text-data">
            <p className="text-title">{reminder.title}</p>
            <p className="text">{reminder.description}</p>
          </div>
          <div className="read-link-container">
            <a className="read-link" href={`news/${index}`}>
              Read More
            </a>
          </div>
        </div>
      </section>
    ));
  };

  return (
    <ReminderClickedContainer>
      <div className="total-container">
        <h1 className="title">What's News</h1>
        <button className="edit-button" onClick={handleEditClick}>
          ✏️
        </button>

        {isEditing && (
          <EditForm
            onClose={handleCloseForm}
            onSubmit={handleFormSubmit}
            initialData={{
              date: "",
              title: "",
              postedBy: "",
              description: "",
              user_id: 2, // Ensure this matches the backend requirement
            }}
          />
        )}

        <div className="reminder-list">{renderReminders()}</div>
        <div className="buttons-container poppins-extrabold">
          <img
            className="icon"
            src={leftIcon}
            onClick={() => handlePageChange("prev")}
            alt="Previous"
          />
          {/* Left arrow icon */}
          {currentPage} / {totalPage}
          {/* Page number display */}
          <img
            className="icon"
            src={rightIcon}
            onClick={() => handlePageChange("next")}
            alt="Next"
          />
          {/* Right arrow icon */}
        </div>
      </div>
    </ReminderClickedContainer>
  );
}

export default ReminderClicked;
