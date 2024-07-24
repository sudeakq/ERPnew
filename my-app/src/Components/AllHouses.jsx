import React, { useEffect, useState } from "react";
import { AllHousesContainer } from "./AllHouses.style";
import axios from "axios";

function AllHouse(){

  const [houses,setHouses] = useState([])

  useEffect(()=>{

    try {
      (async ()=>{
        const response = await axios.get("http://localhost:8000/api/apartments");
  
        if(response.status) {
          setHouses(response.data)
        }
  
      })();
      
    } catch (error) {
      console.log(error)
    }

  },[])

  useEffect(()=>{
    console.log(houses)
  },[houses])

  if(!houses.length) return (<div>Loading...</div>)
    
  return(
    <AllHousesContainer>
      <div className="houses">
        <h1>Houses</h1>
        <div className="locators">
          <span>9/9 locators</span>
          <button className="edit-button">✎</button>
        </div>
        <div className="houses-grid">
          {
            houses.map((house, index) => {

              const {single_room,double_room} = house;

              return (
                <div className="house-card" key={index}>
                  <div className="house-header">
                    <h2>{house.name}</h2>
                    <button className="edit-button">✎</button>
                  </div>
                  <div className="room">
                      <span>Single</span>
                      <button className='status red'></button>
                    </div>
                  {(Array.from({length : single_room})).map(()=>{
                    return (
                      <div className="room" >
                      <span>Single </span>
                      <button className='status red'></button>
                    </div>
                    )
                  })}
                  {(Array.from({length : double_room})).map(()=>{
                    return (
                      <div className="room" >
                      <span>Double </span>
                      <button className='status green'></button>
                    </div>
                    )
                  })}
                </div>
              )

            }
            )}

        </div>
      </div>
    </AllHousesContainer>
  )
}

export default  AllHouse