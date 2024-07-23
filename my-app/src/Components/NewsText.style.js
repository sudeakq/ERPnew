
import styled from "styled-components";

export const NewsTextContainer = styled.div`
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem;

    .text-container {
        
        background-color: white;
        border-radius: 10px;
        width: 90%;
        height: 90%;
        padding: 50px;
        border: 1px solid rgba(220,221,225,1);

        .title-data {
            display: flex;
            justify-content: center;
            align-items: center;

            .user-image {
                background-color: white;
                height: 50px;
                width: 50px;
                border-radius: 100%;
                background-color: #D9D9D9;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: bold;
            }

            .title-text {
                text-align: center;
                margin: 50px 20px;
                color: #4F4F4F;
            }

        }

        .text-data {
            font-size: 28px;
            color: #4F4F4F;
        }

    }

 
    .buttons-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;
        font-weight: bold;
        font-size: 11px;
        gap: 3px;
    }


    .icon {
        margin-left: 0;
        height: auto;
        width: 10px;
    }

`
