
import styled from "styled-components";

export const WorkersDataContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

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
    grid-template-columns: 30% 30% 30%;
    gap: 20px;
    justify-content: center;
    padding: 20px 0;

    .card {
        width: 80%;
        padding: 20px 0;
        position: relative;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #BDE3FF;
        gap: 20px;
        
        .image {
            width: 225px;
            height: 225px;
            box-sizing: border-box;
            object-fit: cover;
        }

        p {
            font-size: 20px;
            transition: 0.5s ease-in-out;
        }

        .name {
            font-weight: bold;
        }

    }

    .card:hover p {
        opacity: 100%;
    }

  }

`
