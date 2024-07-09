import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import NewsPage from "./NewsPage";
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
