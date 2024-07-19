import React, { useState } from "react";
import { ArrivalsContainer } from "./Arrivals.style";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import UpcomingArrivalCard from './UpcomingArrivalCard';
import { Button, Modal, Box, Typography, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

function Arrivals() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState('');
  const [department, setDepartment] = useState('');
  const [entries, setEntries] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      surname,
      date: date ? date.format('YYYY-MM-DD') : null,
      status,
      department,
    };

    try {
      const response = await fetch('http://localhost:8000/api/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
        
        // Yeni girişi entries state'ine ekleyin
        setEntries([...entries, formData]);
        
        // Formu temizleyin
        setName('');
        setSurname('');
        setDate(null);
        setStatus('');
        setDepartment('');

        handleClose(); // Close the modal on successful submission
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
                  New Entry
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      value={date}
                      onChange={(newValue) => setDate(newValue)}
                      margin="normal"
                    />
                  </LocalizationProvider>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <MenuItem value="arriving">Arriving</MenuItem>
                      <MenuItem value="departing">Departing</MenuItem>
                      <MenuItem value="none">None</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Department</InputLabel>
                    <Select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <MenuItem value="HR">HR</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="Engineering">Engineering</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                      <MenuItem value="Sales">Sales</MenuItem>
                    </Select>
                  </FormControl>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </form>
              </Box>
            </Modal>
          </div>

          <UpcomingArrivalCard entries={entries} />
        </div>
      </div>
    </ArrivalsContainer>
  );
}

export default Arrivals;
