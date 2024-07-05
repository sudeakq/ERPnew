
import styled from "styled-components";
import image from "../images/ForgotPassword-Background-Img.png";

export const ForgotPasswordContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.75rem 2rem;
    border-radius: 1rem;
    gap: 10px;
    height: 100vh;
    background-image : url(${image});
    background-size: cover;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        padding: 1.75rem 2rem;
        border-radius: 1rem;
        gap: 10px;
        width: 48rem;
    }

    h1 {
        color: #384C8D;
    }

    .desc {
        font-weight: 500;
        font-size: 22.5px; 
    }

    .btn > button {
        border: 0;
        padding: .5rem 2.25rem;
        margin-top: .5rem;
        border-radius: 7.5px;
        background-color: #597EF7;
        color: white;
        cursor: pointer;
    }

    button > p {
        font-weight: 600;
        font-size: 16px;
    }
    img {
        max-width: 100%;
        display: block;
    }
    .ExtramusTextImg {
        width: 14rem;
    }
    
    `
