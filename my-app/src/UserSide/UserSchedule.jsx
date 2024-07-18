import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
/* import Content from "./Content"; */
/* import NewsPage from "./NewsPage"; */
/* import ReadMore from "./Components/ReadMore"; */
/* import Birthday from "./Components/Birthday"; */
import WeeklySchedule from "./Components/WeeklySchedule";
/* import Bills from "./Bills"; */
/* import MeetPeople from "./MeetPeople"; */
import "./UserDashboard.css";

function UserDashboard() {
  return (
    <>
      <Header />
      <div className="Main">
        <Sidebar />
        <WeeklySchedule />
      </div>
    </>
  );
}

export default UserDashboard;
