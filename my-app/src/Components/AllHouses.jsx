import React, { useEffect, useState } from "react";
import { AllHousesContainer } from "./AllHouses.style";
import axios from "axios";

function AllHouse(){

  const [houses,setHouses] = useState([])
  const [visibleCount,setVisibleCount] = useState(0);

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

  const handleVisibility = async (data) => {
    
    try {

      const response1 = await axios.get(`http://localhost:8000/api/apartments/${data}`)

      if(response1.status){
        const houseData = response1.data;

        const response = await axios.put(`http://localhost:8000/api/apartments/${data}`,{
          is_visible : !houseData.is_visible 
        })

        if(response.status) window.location.reload();

      }
    } catch (error) {
      console.log(error)
    }
  }

  if(!houses.length) return (<div>Loading...</div>)
    
  return(
    <AllHousesContainer>
      <div className="houses">
        <h1>Houses</h1>
        <div className="locators">
          <span>{visibleCount}/{houses.length} locators</span>
        </div>
        <div className="houses-grid">
          {
            houses.map((house, index) => {

              const {single_room,double_room} = house;

                return (
                  <div style={house.is_visible ? ({}) : ({opacity : "50%"}) } className="house-card" key={index}>
                    <div className="top-container">
                      <div className="house-header">
                        <h2>{house.name}</h2>
                        <div className="house-emoji-container">
                          <button value={house.id} onClick={(e)=>handleVisibility(e.target.value)} style={house.is_visible ? ({}) : ({color : "black"}) } className="edit-button">🔍</button>
                          <button style={house.is_visible ? ({color : "black"}) : ({color : "black"}) } className="edit-button">✎</button>
                        </div>
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