
import styled from "styled-components";

export const AlumniListContainer = styled.div`

   .alumni-list {
      font-family: Arial, sans-serif;
   }
  
  .headeral {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #5cb85c;
    margin-bottom: 20px;
  }
  
  .headeral h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    flex-grow: 1; /* Allow the header to take up remaining space */
  }
  
  .controls {
    display: flex;
    align-items: center;
    gap: 10px; /* Add some space between controls */
  }
  
  .controls input[type="text"] {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .controls button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .controls .csv-import {
    background-color: #f0ad4e;
    color: white;
  }
  
  .controls .add-candidate {
    background-color: #5cb85c;
    color: white;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background-color: #f2f2f2;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th input[type="checkbox"], td input[type="checkbox"] {
    margin: 0;
  }
  
  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tbody tr:hover {
    background-color: #f1f1f1;
  }
  

`
