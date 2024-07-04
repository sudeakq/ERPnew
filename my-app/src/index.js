import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
/* import UpcomingBirthdays from './UpcomingBirthdays'; */
=======
// import UpcomingBirthdays from './UpcomingBirthdays';

>>>>>>> 49e2e93dd5f2c3e4fd4eea19a434c85ef1462fbd

// import ScheduleView from './Schedule-2';
// import DailyReminders from './Events';
// import Schedule from './Schedule';
// import ApplicantsForm from './ApllicantForm';
// import ApplicantsList from './Components/ApllicantsList';
// import ApplicantsForms from './Components/ApllicantForms';
// import WhatsNew from './WhatsNew';

// Uncomment and import the necessary components as needed
<<<<<<< HEAD
// import WhatsNewClick from './WhatsNewClick'; 
import Intern from './Intern'; 
// import DailyReminders from './Events';
// import Alumni from './Dashboard';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import ScheduleView from './Schedule-2';
// import Alumni from './Alumni';
// import House from './Houses';
// import Bills from './Bills'; 
// import ForgotPassword from './UserSıde/ForgotPassword'
=======
/* import WhatsNewClick from './WhatsNewClick'; */
// import Intern from './Intern'; //
//  import DailyReminders from './Events';
 // import Alumni from './Dashboard';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import ScheduleView from './Schedule-2';
/* import Alumni from './Alumni'; */
//  import House from './Houses';
// import Bills from './Bills'; //
import ForgotPassword from './UserSıde/ForgotPassword'
>>>>>>> 49e2e93dd5f2c3e4fd4eea19a434c85ef1462fbd
// import Depar from './Depar';  // Fixed the path
// import AllHous from './AllHouse';
// import Applicants from './Applicants';
// import StartPage from './StartPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Uncomment the component you want to render */}
    {/* <WhatsNewClick /> */} {/* done */} 
    {/* <ForgotPassword />   */}
    {/* <DailyReminders /> */}
    {/* <UpcomingBirthdays /> */}
    {/* <ScheduleView /> */}
    {/* <Alumni /> */}
    <Intern />
    {/* <House /> */}
    {/* <StartPage />   */}   {/* Done */}
    {/* <ApplicantsList /> */}
    {/* <Depar /> */} 
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
