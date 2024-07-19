import React, { useState } from "react";
import { ArrivalsContainer } from "./Arrivals.style";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import UpcomingArrivalCard from './UpcomingArrivalCard';
import { Button, Modal, Box, Typography } from "@mui/material";

function Arrivals() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <ArrivalsContainer>
      <h1 style={{ paddingTop: "30px" }}>Upcoming Arrivals</h1>
      <div className="container-reminder">
        <div className="calendar-reminder border-reminder">
          <h1>Calendar</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>

        <div className="list-reminder">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>List</h1>
            {/* modal-button */}
            <Button
              onClick={handleOpen}
              style={{
                backgroundColor: 'green',
                color: 'white',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '16px'
              }}
            >
              Add New
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          </div>

          <UpcomingArrivalCard />
        </div>
      </div>
    </ArrivalsContainer>
  );
}

export default Arrivals;
  