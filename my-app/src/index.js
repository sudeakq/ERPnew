import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartPage from './StartPage';
import WhatsNewClick from './WhatsNewClick';
import DailyReminders from './DailyReminders';
import Events from './Events';
import Intern from './Intern';
import Dashboard from './Dashboard';
import UpcomingBirthdays from './UpcomingBirthdays';
import UpcomingArrivals from './UpcomingArrivals';
import ForgotPassword from './UserSide/ForgotPassword';
import ScheduleView from './Schedule-2';
import Alumni from './Alumni';
import Bills from './Bills';
import AllHous from './AllHouse';
import Applicants from './Applicants';
import Departments from './Departments';
import Workers from './Workers';
import NewsData from './NewsData';
import ApplicantsForm from './ApllicantForm';

/* import UpcomingBirthdays from './UpcomingBirthdays'; */
// import ScheduleView from './Schedule-2';
// import DailyReminders from './Events';
// import Schedule from './Schedule';
// import ApplicantsForm from './ApllicantForm';
// import ApplicantsList from './Components/ApllicantsList';
// import ApplicantsForms from './Components/ApllicantForms';
// import WhatsNew from './WhatsNew';

// Uncomment and import the necessary components as needed
// import DailyReminders from './Events';
// import Alumni from './Dashboard';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import ScheduleView from './Schedule-2';
// import Alumni from './Alumni';
// import House from './Houses';
// import Bills from './Bills'; 
// import ForgotPassword from './UserSıde/ForgotPassword'
/* import WhatsNewClick from './WhatsNewClick'; */
/* import Intern from './Intern'; */ //
//  import DailyReminders from './Events';
 // import Alumni from './Dashboard';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import ScheduleView from './Schedule-2';
/* import Alumni from './Alumni'; */
//  import House from './Houses';
// import Bills from './Bills'; //
// import Depar from './Depar';  // Fixed the path
// import AllHous from './AllHouse';
// import Applicants from './Applicants';
// import StartPage from './StartPage';
// ,khkdbhhdbfhbahbrvhabrhbvb


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes  >
        <Route path='/' element={<StartPage />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/workers' element={<Workers />} />
        <Route path='/news' element={<WhatsNewClick />} />
        <Route path='/news/1' element={<NewsData />} />
        <Route path='/interns' element={<Intern />} />
        <Route path='/reminder' element={<DailyReminders />} />
        <Route path='/events' element={<Events />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/birthdays' element={<UpcomingBirthdays />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} /> {/* type the "path" on url and you'll go to the page */}
        <Route path='/schedule' element={<ScheduleView />} />
        <Route path='/alumni' element={<Alumni />} />
        <Route path='/bills' element={<Bills />} />
        <Route path='/houses' element={<AllHous />} />
        <Route path='/applicants' element={<Applicants />} />
        <Route path='/arrivals' element={<UpcomingArrivals />} />
        <Route path="/ApplicantForm" element={<ApplicantsForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();