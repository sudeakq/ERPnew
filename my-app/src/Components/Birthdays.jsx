import React from "react";
import { BirthdaysContainer } from "./Birthdays.style";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import UpcomingBirthdayCard from "./UpcomingBirthdaysCard";
function Birthdays() {

  return (
    <BirthdaysContainer>
      <h1 style={

        { paddingTop: "30px"}
      }>Upcoming Birthdays</h1>
    <div class="container-reminder">
   
    <div class="calendar-reminder border-reminder">
          
         <h1>Calendar</h1>
         <iframe
            src="https://calendar.google.com/calendar/embed?src=sudeakq%40gmail.com&ctz=Europe%2FIstanbul"
            style={{ border: '0', width: '450px', height: '300px' }}
          ></iframe></div>
      <div class="list-reminder">
        <h1>List</h1>
        <UpcomingBirthdayCard  pagination={true} />
      </div>
    </div>
    </BirthdaysContainer>
  );
}

export default Birthdays