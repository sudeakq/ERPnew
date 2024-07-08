import React from "react";
import { ArrivalsContainer } from "./Arrivals.style";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import UpcomingArrivalCard from './UpcomingArrivalCard';
function Arrivals() {

  return (
    <ArrivalsContainer>
      <h1 style={

        { paddingTop: "30px"}
      }>Upcoming Arrivals</h1>
    <div class="container-reminder">
   
    <div class="calendar-reminder border-reminder">
          
         <h1>Calendar</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DateCalendar />
          </LocalizationProvider></div>
      <div class="list-reminder">
        <h1>List</h1>
       < UpcomingArrivalCard/>
      </div>
    </div>
    </ArrivalsContainer>
  );
}

export default Arrivals