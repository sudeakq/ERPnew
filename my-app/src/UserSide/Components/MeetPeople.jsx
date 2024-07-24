import React from "react";
import People from "./People";
/* import "./MeetPeople.css"; */
import Peoples from "./MeetPeopleData";
import { MeetPeopleContainer } from "./MeetPeople.style";

function MeetPeople() {
  return (
    <MeetPeopleContainer>
      <div className="MeetPeople">
        <h1>MEET THE PEOPLE</h1>
        <div className="Peoples">
          {Peoples.map((item, index) => (
            <People name={item.name} jobTitle={item.Job} image={item.image} />
          ))}
        </div>
      </div>
    </MeetPeopleContainer>
  );
}
export default MeetPeople;
