
import styled from "styled-components";

import BackgroundImage from "../images/ForgotPassword-Background-Img.png"

export const ResetPasswordContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${BackgroundImage}) no-repeat center;
    background-size : cover;

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    gap: 1.5rem;
    padding: 2.5rem 3rem 6.5rem 3rem;
}
.resetP-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.top {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title {
    color: #384C8D;
    font-size: 30px;
}
.title-2 {
    font-weight: 600;
    color: #384C8D;
}
p {
    font-weight: 500;
    color: #4B5563;
}
.Extramus-image{
    width: 13rem;
}
input {
    border: 0;
    padding: .75rem 5rem .75rem .5rem;
    border-radius: 6px;
    margin-top: .25rem;
    background-color: #E4EBF7;
    cursor: pointer;
}
::placeholder{
    font-weight: 700;
    color: #4B5563;
    opacity: 50%;
}
button {
    border: 0;
    padding: .5rem 6.7rem;
    margin-top: 1rem;
    border-radius: 12px;
    background-color: #597EF7;
    color: white;
    cursor: pointer;
}
button > p {
    font-weight: 600;
    color: white;
}

`
