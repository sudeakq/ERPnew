
import styled from "styled-components";

export const MeetPeopleContainer = styled.div`
    width: 100%;

.MeetPeople {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}

.Peoples {
    width: 63%;
    margin-top: .5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
}
.People {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #483894;
    border-radius: 6px;
}
.PeopleImg {
    display: flex;
    align-items: center;
    justify-content: center;
}
.PeopleImg > img {
    margin-top: .25em;
    width: 85%;
}
.PeopleDesc {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    gap: .25em;
}
.peopleJob {
    font-weight: 100;
    font-size: 13px;
}
.peopleName {
    margin-top: .25em;
}
.btnIcon {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-left: 3em;
    padding-bottom: .5em;
}
.btnIcon > img {
    width: 15%;
    cursor: pointer;
}
h1 {
    margin-top: .5em;
    font-size: 24px;
}

`
