import React, { useEffect, useState } from "react";
import { AllHousesContainer } from "./AllHouses.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllHouse(){

  const [houses,setHouses] = useState([])
  const [visibleCount,setVisibleCount] = useState(0);

  const navigate = useNavigate();

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
    if(houses) setVisibleCount(houses.filter(house=>house.is_visible).length)
  },[houses])

  if(!houses.length) return (<div>Loading...</div>)
    
  return(
    <AllHousesContainer>
      <div className="houses">
        <h1>Houses</h1>
        <div className="locators">
          <span>{visibleCount}/{houses.length} locators</span>
          <button className="edit-button">✎</button>
        </div>
        <div className="houses-grid">
          {
            houses.map((house, index) => {

              const {single_room,double_room} = house;

                return (
                  <div style={house.is_visible ? ({opacity : "50%"}) : ({}) } className="house-card" key={index}>
                    <div className="top-container">
                      <div className="house-header">
                        <h2>{house.name}</h2>
                        <button style={house.is_visible ? ({color : "black"}) : ({}) } className="edit-button">✎</button>
                      </div>
                      <div className="house-body">
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
                    </div>
                    <div className="house-bottom">
                    <div className="bills-button-container" >
                      <button className="bills-button" onClick={()=>navigate(`/bills/${house.id}`)} >Bills</button>
                    </div>
                    </div>
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