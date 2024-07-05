import React from "react";
import { HousesListContainer } from "./HousesList.style";

function HousesList() {


  return (
    <HousesListContainer>
    <div className="houses">
      <h1>Houses</h1>
      <div className="houses-grid">
        <div className="house-card">
          <h2>Bianco 1</h2>
          <p>1x double</p>
          <p>1x single</p>
        </div>
        <div className="house-card">
          <h2>Bianco 2</h2>
          <p>1x double</p>
          <p>1x single</p>
        </div>
        <div className="house-card">
          <h2>Ferraro</h2>
          <p>1x double</p>
          <p>1x single</p>
        </div>
        <div className="house-card">
          <h2>Gallo</h2>
          <p>3x double</p>
          <p>3x single</p>
        </div>
        <div className="house-card">
          <h2>Gentile</h2>
          <p>2x double</p>
        </div>
        <div className="house-card">
          <h2>Pignataro</h2>
          <p>2x double</p>
          <p>2x single</p>
        </div>
        <div className="house-card">
          <h2>Romeo</h2>
          <p>2x double</p>
        </div>
        <div className="house-card">
          <h2>Russo 1</h2>
          <p>1x double</p>
          <p>2x single</p>
        </div>
        <div className="house-card">
          <h2>Russo 2</h2>
          <p>2x double</p>
          <p>1x single</p>
        </div>
        <div className="house-card">
          <h2>Veronica</h2>
          <p>1x double</p>
        </div>
        <div className="house-card">
          <h2>Villani</h2>
          <p>1x double</p>
          <p>1x single</p>
        </div>
      </div>
    </div>

    </HousesListContainer>

  );


}


export default HousesList