import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ApplicantsForm from './ApllicantForm';
// import ApplicantsList from './Components/ApllicantsList';
// import ApplicantsForms from './Components/ApllicantForms';
// import WhatsNew from './WhatsNew';

// Uncomment and import the necessary components as needed
// import WhatsNewClick from './WhatsNewClick';
 import Intern from './Intern';
 import DailyReminders from './Events';
 import Dashboard from './Dashboard';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import ScheduleView from './Schedule-2';
// import Alumni from './Alumni';
 import House from './Houses';
// import Bills from './Bills';
// import Depar from './Depar';  // Fixed the path
// import AllHous from './AllHouse';
// import Applicants from './Applicants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Uncomment the component you want to render */}
    {/* <WhatsNewClick /> */}
    {/* <Intern /> */}
    {/* <DailyReminders /> */}
    {/* <Dashboard /> */}
    {/* <UpcomingBirthdays /> */}
    {/* <ScheduleView /> */}
    {/* <Alumni /> */}
    {/* <House /> */}
    <ApplicantsForm />
    {/* <Depar /> */}
    {/* <AllHous /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
