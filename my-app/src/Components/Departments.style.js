
import styled from "styled-components";
import ITcard  from "../images/image17.png";
import HRcard from "../images/HrImage.avif";
import BAcard from "../images/BaImage.jpg";
import DAcard from "../images/DAimage.avif";
import DMcard from "../images/DmImage.jpg";
import EPMcard from "../images/EPMimage.jpg";
import FAcard from "../images/FaImage.webp";
import UDcard from "../images/UDimage.jpg";
import UXcard from "../images/UXimage.jpg";


export const DepartmantsContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  height: 120vh;

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
    height: 100%;
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
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 30px;
      transition: 0.5s ease-in-out;
    }
    .C1::before {
      background-image: url(${ITcard});
    }
    .C2::before {
      background-image: url(${HRcard});
    }
    .C3::before {
      background-image: url(${DMcard});
    }
    .C4::before {
      background-image: url(${FAcard});
    }
    .C5::before {
      background-image: url(${BAcard});
    }
    .C6::before {
      background-image: url(${DAcard});
    }
    .C7::before {
      background-image: url(${UXcard});
    }
    .C8::before {
      background-image: url(${UDcard});
    }
    .C9::before {
      background-image: url(${EPMcard});
    }
    
    .card:hover p {
      transform: translateX(30px);
    }

    .card:hover h2   {
      transform: translateX(30px);
    }


    .card:hover::before {
      opacity: 0.2; 
    }

    .card {
      position: relative;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      background-color: #BDE3FF;

      h2 {
        font-weight: bold;
        font-size: 30px;
        transition: 0.3s ease-in-out;
        margin-bottom: 20px;
        opacity: 0%;
      }

      p {
        font-weight: bold;
        font-size: 20px;
        transition: 0.5s ease-in-out;
        margin-bottom: 35px;
        opacity: 0%;
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
