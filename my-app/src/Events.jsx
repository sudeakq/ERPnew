import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Events from "./Components/UpcomingEvents";

function DailyReminders() {
  return (
    <>
      <Header />
      <div className="Main">
        <Sidebar />
        <Events />
      </div>
    </>
  );
}

export default DailyReminders;
