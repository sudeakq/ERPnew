import React from "react";
/* import Content from "./Content"; */
import NewsPage from "./Components/NewsPage";
/* import ReadMore from "./ReadMore"; */
/* import Birthday from "./Birthday"; */
/* import WeeklySchedule from "./WeeklySchedule"; */
/* import Bills from "./Bills"; */
import Header from "./Header";
import Sidebar from "./Sidebar";
/* import MeetPeople from "./MeetPeople"; */
import "./UserDashboard.css";

function UserDashboard() {
  return (
    <>
      <Header />
      <div className="Main">
        <Sidebar />
        <NewsPage />
      </div>
    </>
  );
}

export default UserDashboard;
