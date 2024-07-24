
import styled from "styled-components";

export const UserStartPageContainer = styled.div`

.container {
    min-height: 100vh;
    display: flex;
}

.UserStartLeft{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 15rem;
    background-color: #E4EBF7;
}
.leftImage {
    height: 600px;
}
.signFormPart {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 5.25rem;
    gap: .5rem;
    background-color: white;
}
.signFormPart > img {
    width: 240px;
}
h1 {
    color: #384C8D;
}
p {
    font-weight: 500;
    color: #4B5563;
}
.ForgotPass {
    color: #0070BA;
    font-weight: 700;
    cursor: pointer;
}
.bottom-sign{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: .25rem;
}
.RememberMe {
    display: flex;
    align-items: center;
    gap: .5rem;
}
.RememberMe > input {
    cursor: pointer;
}
.sign-form {
    display: flex;
    flex-direction: column; 
    gap: 1rem;
    margin-top: .5rem;
}
.sign-form > input {
    border: 0;
    background-color: #E4EBF7;
    padding: .5rem 9rem .5rem 1rem;
    border-radius: 6px;
}
.btn > button {
    border: 0;
    padding: .5rem 9rem;
    margin-top: .5rem;
    border-radius: 12px;
    background-color: #597EF7;
    color: white;
    cursor: pointer;
}
.sign-up {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-top: .25rem;
}

`
