import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import WhatsNewClick from './WhatsNewClick';
import reportWebVitals from './reportWebVitals';
// import DailyReminders from './Events';
// import Dashboard from './Dashboard';
import UpcomingBirthdays from './UpcomingBirthdays';

import Dashboard from './Dashboard';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
