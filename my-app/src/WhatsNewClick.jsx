import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ReminderClicked from './Components/ReminderClicked'; // Ensure this path is correct
import EditForm from './Components/EditForm'; // Ensure this path is correct

// WhatsNewClick Component
function WhatsNewClick() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [formInitialData, setFormInitialData] = useState({
    title: "",
    paragraph: "", // Ensure this field matches your backend requirement
    date: "",
    user_id: 2
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/news?page=2');
        setReminders(response.data);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    })();
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/news', formData);
      setReminders([...reminders, response.data]);
      setIsFormOpen(false); // Close form after submission
    } catch (error) {
      console.error('Error adding reminder:', error);
    }
  };

  const handleOpenForm = () => {
    setFormInitialData({
      title: "",
      paragraph: "", // Reset the form fields as necessary
      date: "",
      user_id: 2
    });
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          {/* <button onClick={handleOpenForm}>Add Reminder</button> Button to open the form */}
          <ReminderClicked reminders={reminders} />
          {isFormOpen && 
            <EditForm 
              onClose={handleCloseForm} 
              onSubmit={handleFormSubmit} 
              initialData={formInitialData} 
            />
          }
        </main>
      </div>
    </>
  );
}

export default WhatsNewClick;
