
import styled from "styled-components";

export const ReminderClickedContainer = styled.div`
padding-bottom : 50px;
background-color: rgba(228,234,246,255);

.total-container {
    background-color: rgba(228,234,246,255); 
    height: 100%;
    padding-top: 30px;
}

.title {
    text-align: center;
    margin-bottom: 30px;
}

.reminder-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.reminder-container {
    width: 75%;
    border-radius: 20px;
    padding: 40px 0;
    background-color: white;
    border: 1px solid #DCDDE1;
}

.top-inner-container {
    display: flex;
    margin-bottom: 50px;
}

.date {
    text-align: center;
    width: 15%;
    color: #4F4F4F;
    font-weight: bold;
}

.edit-button {
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    padding:15px;
     margin-right: 10px;
    color: black;
    margin-left: 77rem;
    margin-bottom: 20px; /* Set text color to black */
    /* Space between button and title */
}

.date-text {
    font-size: 17px;    
    font-weight: bold;
    margin-bottom: 20px;
}

.post-by-text {
    font-size: 15px;
    font-weight: bold;
} 

.text-data {
    width: 70%;
    color: #4F4F4F;
}

.text-title {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 20px;
}

.text {
    font-size: 18px;
}

.read-link-container {
    width: 15%;
    text-align: center;
}

.read-link {
    font-weight: bold;
    text-align: center;
    color: #4F4F4F;
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
