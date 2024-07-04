import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import UpcomingBirthdays from './UpcomingBirthdays';


// import ScheduleView from './Schedule-2';
// import DailyReminders from './Events';
// import Schedule from './Schedule';
// import ApplicantsForm from './ApllicantForm';
// import ApplicantsList from './Components/ApllicantsList';
// import ApplicantsForms from './Components/ApllicantForms';
// import WhatsNew from './WhatsNew';

// Uncomment and import the necessary components as needed
import StartPage from './StartPage'; 
import WhatsNewClick from './WhatsNewClick'; 
import DailyReminders from './Events';
import Intern from './Intern';
import Alumni from './Dashboard';
import UpcomingBirthdays from './UpcomingBirthdays';
import ForgotPassword from './UserSıde/ForgotPassword' 
// import ScheduleView from './Schedule-2';
// import Alumni from './Alumni';
// import House from './Houses';
// import Bills from './Bills'; 
/* import WhatsNewClick from './WhatsNewClick'; */
/* import Intern from './Intern';  *///
//  import DailyReminders from './Events';
 // import Alumni from './Dashboard';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import ScheduleView from './Schedule-2';
/* import Alumni from './Alumni'; */
//  import House from './Houses';
// import Bills from './Bills'; //
//import ForgotPassword from './UserSıde/ForgotPassword'
// import Depar from './Depar';  // Fixed the path
// import AllHous from './AllHouse';
// import Applicants from './Applicants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes  >
        <Route path='/login'  element={<StartPage />} />
        <Route path='/news'  element={<WhatsNewClick />} />   
        <Route path='/interns'  element={<Intern />} /> 
        <Route path='/reminder'   element={<DailyReminders />} />
        <Route path='/dashboard'   element={<Alumni />} />
        <Route path='/birthdays'   element={<UpcomingBirthdays />} />
        <Route path='/forgotPassword'   element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>

    {/* Uncomment the component you want to render */}
    {/* <WhatsNewClick /> */} {/* done */} 
    {/* <ForgotPassword />   */}
    {/* <DailyReminders /> */}
    {/* <UpcomingBirthdays /> */}
    {/* <ScheduleView /> */}
    {/* <Alumni /> */}
{/*     <Intern /> */}
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
