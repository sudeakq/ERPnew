import styled from "styled-components";

export const UpcomingEventsContainer = styled.div`

.BirthdayPage {
    padding-left: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
    min-width: 970px;
}
.Heading {
  margin-right: 8em;
}
.Contain-Birthday {
    margin-top: 1rem;
    display: flex;
    gap: 7.5rem;
}
.Content-Birthday {
    width: 37.5vw;
    min-width: 500px;
    background-color: white;
    border: #DCDDE1 1px solid;
    border-radius: 20px;
    padding: 2em;
    padding-left: 3em;
    padding-right: 3em;
    color: #4F4F4F;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.Birthdays-Section {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 500px;
}
.Birthday {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.arriveInfos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 57.5%;
}
.Arriving {
  color: #07B94E;
}
.Departing {
  color: #DB5F5F;
}
.right-B {
    display: flex;
    align-items: center;
    gap: .5rem;
}
.right-B > img {
    width: 25px;
}
.left-B > b {
    color: black;
}
.Calendar-Section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 20vw;
    min-width: 300px;
}
.CalendarContain {
    background-color: white;
    border: #DCDDE1 1px solid;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    
}   
table {
    border-collapse: separate;
    border-spacing: 1.5rem 1rem;
}
.selectedDate {
    background-color: blue;
    border-radius: 10px;
    color: white;
}
.calendarDays {
    color: #333333;
    opacity: 0.8;
}
.greyDay {
    color: #333333;
    opacity: 0.5;
}

`
