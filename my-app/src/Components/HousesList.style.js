
import styled from "styled-components";

export const HousesListContainer = styled.div`

    /* Houses.css */
.houses {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
  }
  
  .houses h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .houses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 20px;
    justify-items: center;
  }
  
  .house-card {
    background-color: #e6f3ff;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 150px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .house-card h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 10px 0;
  }
  
  .house-card p {
    margin: 5px 0;
    font-size: 14px;
  }
  

`
