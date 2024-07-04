import React from "react";
import { AllHousesContainer } from "./AllHouses.style";

function AllHouse(){

  return(
    <AllHousesContainer>
    <div className="houses">
      <h1>Houses</h1>
      <div className="locators">
        <span>9/9 locators</span>
        <button className="edit-button">✎</button>
      </div>
      <div className="houses-grid">
        {[
          { name: 'Bianco 1', rooms: ['Double', 'Single'] },
          { name: 'Bianco 2', rooms: ['Double', 'Single'] },
          { name: 'Ferraro', rooms: ['Double', 'Single'] },
          { name: 'Gallo', rooms: ['Double', 'Double', 'Double', 'Single', 'Single'] },
          { name: 'Gentile', rooms: ['Double', 'Double'] },
          { name: 'Pignataro', rooms: ['Double', 'Double', 'Single', 'Single'] },
          { name: 'Romeo', rooms: ['Double', 'Double'] },
          { name: 'Russo 1', rooms: ['Double', 'Single', 'Single'] },
          { name: 'Russo 2', rooms: ['Double', 'Double', 'Single'] },
        ].map((house, index) => (
          <div className="house-card" key={index}>
            <div className="house-header">
              <h2>{house.name}</h2>
              <button className="edit-button">✎</button>
            </div>
            {house.rooms.map((room, i) => (
              <div className="room" key={i}>
                <span>{room}</span>
                <button className={room === 'Single' ? 'status red' : 'status green'}></button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    </AllHousesContainer>
  )
}

export default  AllHouse