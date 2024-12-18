
import styled from "styled-components";

export const ContentContainer = styled.div`

    display: flex;
    flex-direction: column;

.Top-Sections{
    display: flex;
    align-items: center;
}
.Bottom-Sections {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 1rem;
}
.HeadFlex {
    display: flex;
    align-self: center;
    justify-content: space-between;
}
.New-Section {
    width: 40vw;
    margin-left: 2.5rem;
}
.New {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 2rem;
    border-radius: 20px;
}
.new-left {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}
.News {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 370px;
}
.Header-News {
    margin-top: 1rem;
    padding-left: 1.5rem;
}
.New:nth-child(1) {
    background-color: #7356FF;
}
.New:nth-child(2) {
    background-color: #4E97E8;
}
.New:nth-child(3) {
    background-color: #4C8BD2;
}
.white {
    background-color: white;
    padding: 1rem 2.25rem 1rem 1rem;
    border-radius: 1rem 2rem 2rem 1rem;
    
}
.white > h2 {
    color: #2467B2;
}
.right-H_news {
    display: flex;
    align-items: center;
}
.cizgi {
    font-weight: bold;
    text-decoration-line: underline;
    cursor: pointer;
}
.Schedule-Section {
    margin-left: 2.5rem;
    width: 40vw;
    min-width: 370px;
}
.content-schedule {
    display: flex;
    justify-content: space-between;
    border: #DCDDE1 2px solid;
    border-radius: 10px;
    padding: 1rem;
    color: #4F4F4F;
    font-weight: 600;
    margin-top: .5rem;
    background-color: white;
}
.blue {
    color: #2F80ED;
    cursor: pointer;
}
.left-Schedule {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.mid-Schedule {
    display: flex;
    flex-direction: column;
}
li {
    margin-top: .25rem;
}
.Birthdays-Section{
    width: 37.5vw;
    min-width: 300px;
}
.Content-Birthday {
    background-color: white;
    border: #DCDDE1 2px solid;
    border-radius: 10px;
    padding: 1rem;
    color: #4F4F4F;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.Birthday {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.right-B {
    display: flex;
    align-items: center;
    gap: .5rem;
}
.right-B > img {
    width: 25px;
}

`
