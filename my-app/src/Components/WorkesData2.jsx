import React from "react";
import { WorkersDataContainer } from "./WorkersData.style";
import workerImage1 from "../images/man-pic-3.jpg";
import workerImage2 from "../images/women-pic-2.jpg";
import workerImage3 from "../images/men-pic-4.webp";
import workerImage4 from "../images/women-pic-3.avif";
import workerImage5 from "../images/men-pic-5.jpg";
import workerImage6 from "../images/women-4.jpg";

function WorkersData2() {
  return (
    <WorkersDataContainer>
      <div className="title">
        <h4>MEET THE TEAMS</h4>
      </div>
      <div className="grid">
        <div className="card">
          <div>
            <img src={workerImage1} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Andres Boyer</span>{" "}
          </p>
          <p>
            Position : <span className="name">Recruitment</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage2} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Sophia Crane</span>{" "}
          </p>
          <p>
            Position : <span className="name">Executive assistant</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage3} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Foster Lucas</span>{" "}
          </p>
          <p>
            Position : <span className="name">HR intern</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage4} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Jessica Nguyen</span>{" "}
          </p>
          <p>
            Position : <span className="name">Executive assistant</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage5} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Bruce Peck</span>{" "}
          </p>
          <p>
            Position : <span className="name">HR intern</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage6} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Evelyn Burch</span>{" "}
          </p>
          <p>
            Position : <span className="name">Recruitment</span>{" "}
          </p>
        </div>
      </div>
    </WorkersDataContainer>
  );
}

export default WorkersData2;
