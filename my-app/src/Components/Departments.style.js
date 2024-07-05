
import styled from "styled-components";
import cartImage  from "../images/image17.png";

export const DepartmantsContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  height: 100vh;

  .title {
    background-color: #BDE3FF;
    height: 100px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    h4 {
      font-size: 30px;
    }
  }

  .grid {
    width: 90%;
    height: 90%;
    margin-top : 30px;
    display: grid;
    grid-template-columns: 31% 31% 31%;
    gap: 20px;
    justify-content: center;
    padding: 20px 0;

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${cartImage});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 30px;
      transition: 0.5s ease-in-out;
    }
    
    .card:hover::before {
      opacity: 0.2; 
    }

    .card {
      position: relative;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        font-weight: bold;
        font-size: 30px;
        transition: 0.5s ease-in-out;
        margin-bottom: 20px;
      }

      p {
        font-weight: bold;
        font-size: 20px;
        transition: 0.5s ease-in-out;
        margin-bottom: 35px;
      }

    }

    .card:hover h2 {
        opacity: 100%;
    }

    .card:hover p {
        opacity: 100%;
    }

  }

`
