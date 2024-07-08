import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./UserDashboard.css";

function UserDashboard() {
  return (
    <>
      <Header />
      <div className="Main">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default UserDashboard;
