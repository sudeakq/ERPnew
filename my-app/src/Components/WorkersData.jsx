import React from "react";
import { WorkersDataContainer } from "./WorkersData.style";
import workerImage1 from "../images/worker1.png";
import workerImage2 from "../images/worker2.png";
import workerImage3 from "../images/worker3.png";
import workerImage4 from "../images/menpic1.avif";
import workerImage5 from "../images/women-pic-1.jpg";
import workerImage6 from "../images/men-pic-2.jpg";

function WorkersData() {
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
            Name : <span className="name">Joey Morgan</span>{" "}
          </p>
          <p>
            Position : <span className="name">Full Stack</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage2} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Anna Light</span>{" "}
          </p>
          <p>
            Position : <span className="name">Back End</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage3} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">John Smith</span>{" "}
          </p>
          <p>
            Position : <span className="name">Front End</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage4} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">James Stanton</span>{" "}
          </p>
          <p>
            Position : <span className="name">Back End</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage5} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Maria Martinez</span>{" "}
          </p>
          <p>
            Position : <span className="name">Front End</span>{" "}
          </p>
        </div>
        <div className="card">
          <div>
            <img src={workerImage6} alt="" className="image" />
          </div>
          <p>
            Name : <span className="name">Edward Johnson</span>{" "}
          </p>
          <p>
            Position : <span className="name">Full Stack</span>{" "}
          </p>
        </div>
      </div>
    </WorkersDataContainer>
  );
}

export default WorkersData;
