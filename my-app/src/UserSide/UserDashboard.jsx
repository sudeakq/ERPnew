import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
/* import Content from "./Content"; */
/* import NewsPage from "./NewsPage"; */
/* import ReadMore from "./ReadMore"; */
/* import Birthday from "./Birthday"; */
/* import WeeklySchedule from "./WeeklySchedule"; */
import Bills from "./Bills";
import "./UserDashboard.css";

function UserDashboard() {
  return (
    <>
      <Header />
      <div className="Main">
        <Sidebar />
        <Bills />
      </div>
    </>
  );
}

export default UserDashboard;
