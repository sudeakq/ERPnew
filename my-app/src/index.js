import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import WhatsNewClick from './WhatsNewClick';
import reportWebVitals from './reportWebVitals';
// import BiancoHouses from './BiancoHouses';
// import Intern from './Intern';
// import DailyReminders from './Events';
// import Dashboard from './Dashboard';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import ScheduleView from './Schedule-2';
// import Alumni from './Alumni';
// import House from './Houses';
import AllHous from './AllHouse';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllHous />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
