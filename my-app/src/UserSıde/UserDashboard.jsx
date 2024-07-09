import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import NewsPage from "./NewsPage";
import ReadMore from "./ReadMore";
import "./UserDashboard.css";

function UserDashboard() {
  return (
    <>
      <Header />
      <div className="Main">
        <Sidebar />
        <ReadMore />
      </div>
    </>
  );
}

export default UserDashboard;
