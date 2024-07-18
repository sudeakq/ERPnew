import React from "react";
import { DepartmantsContainer } from "./Departments.style";
import { useNavigate } from "react-router-dom";

function Departments() {
  const navigate = useNavigate();

  return (
    <DepartmantsContainer>
      <div className="title">
        <h4>MEET THE TEAMS</h4>
      </div>
      <div className="grid">
        <div className="card C1" onClick={() => navigate("/workers")}>
          <h2>IT</h2>
          <p>Information Technology.</p>
          <p>Click to See More</p>
        </div>
        <div className="card C2" onClick={() => navigate("/workers")}>
          <h2>HR</h2>
          <p>Human Resources.</p>
          <p>Click to See More</p>
        </div>
        <div className="card C3" onClick={() => navigate("/workers")}>
          <h2>DM</h2>
          <p>Digital Marketing.</p>
          <p>Click to See More</p>
        </div>
        <div className="card C4" onClick={() => navigate("/workers")}>
          <h2>FA</h2>
          <p>Financial Accounting.</p>
          <p>Click to See More</p>
        </div>
        <div className="card C5" onClick={() => navigate("/workers")}>
          <h2>BA</h2>
          <p>Business Administration.</p>
          <p>Click to See More</p>
        </div>
        <div className="card C6" onClick={() => navigate("/workers")}>
          <h2>DA</h2>
          <p>Data Analyst.</p>
          <p>Click to See More</p>
        </div>
        <div className="card C7" onClick={() => navigate("/workers")}>
          <h2>UX</h2>
          <p>User Experience.</p>
          <p>Click to See More</p>
        </div>
        <div className="card C8" onClick={() => navigate("/workers")}>
          <h2>UD</h2>
          <p>Urban Developments.</p>
          <p>Click to See More</p>
        </div>
        <div className="card C9" onClick={() => navigate("/workers")}>
          <h2>EPM</h2>
          <p>European Project manager.</p>
          <p>Click to See More</p>
        </div>
      </div>
    </DepartmantsContainer>
  );
}

export default Departments;
