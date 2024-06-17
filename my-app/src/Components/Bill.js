import React from "react";
import './Bill.css';

function Bill() {
  return (
    <>
      <div className="teams-container">
        <h2>Meet The Teams</h2>
        <div className="team-grid">
          {Array(9).fill().map((_, index) => (
            <div className="team-member" key={index}>
              <img src={`${process.env.PUBLIC_URL}/image17.png`} alt="Team Member" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bill;
