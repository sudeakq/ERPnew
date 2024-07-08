import React from "react";
import "./Reminders.css";
import { RemindersContainer } from "./Reminders.style";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DailyReminderCard from "./DailyReminderCard";

function Reminders() {
  return (
    <RemindersContainer>
      <h1 style={{padding:"30px"}}>Daily Reminders</h1>
      <div class="container-reminder">

        <div class="calendar-reminder border-reminder">
          <h1>Calendar</h1>
        
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DateCalendar />
          </LocalizationProvider></div>

       

        <div class="list-reminder">
          <h1>List</h1>
       
<DailyReminderCard/>


        
          </div>
        </div>
     
    </RemindersContainer>

  );
}

export default Reminders