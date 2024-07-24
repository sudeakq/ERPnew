import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// HR COMPONENTS

import StartPage from './StartPage';
import WhatsNewClick from './WhatsNewClick';
import DailyReminders from './DailyReminders';
import Events from './Events';
import Intern from './Intern';
import Dashboard from './Dashboard';
import UpcomingBirthdays from './UpcomingBirthdays';
import UpcomingArrivals from './UpcomingArrivals';
import ScheduleView from './Schedule-2';
import Alumni from './Alumni';
import Bills from './Bills';
import AllHous from './AllHouse';
import Applicants from './Applicants';
import Departments from './Departments';
import Workers from './Workers';
import NewsData from './NewsData';
import ApplicantsForm from './ApplicantForm';
import WindowContainer from './WindowContainer';

// USER COMPONENTS

import UserBills from './UserSide/UserBills';
import UserBirthday from './UserSide/UserBirthday'; 
import UserForgotPassword from './UserSide/ForgotPassword';
import UserMeetPeople from "./UserSide/UserMeetPeople";   
import UserReadMore from "./UserSide/UserReadMore";
import UserResetPassword from "./UserSide/ResetPassword";
import UserDashboard from "./UserSide/UserDashboard";
import UserStartPage from "./UserSide/UserStartPage"; 
import UserNewsPage from "./UserSide/UserNewsPage"; 

const App = () => {

  return (
    <BrowserRouter>
      <Routes  >
        <Route path='/' element={<WindowContainer />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='news' element={<WhatsNewClick />} />
          <Route path='news/1' element={<NewsData />} />
          <Route path='schedule' element={<ScheduleView />} />
          <Route path='daily/reminder' element={<DailyReminders />} />
          <Route path='arrivals' element={<UpcomingArrivals />} />
          <Route path='birthdays' element={<UpcomingBirthdays />} />
          <Route path='departments' element={<Departments />} />
          <Route path='applicants' element={<Applicants />} />
          <Route path='interns' element={<Intern />} />
          <Route path='alumni' element={<Alumni />} />
          <Route path='houses' element={<AllHous />} />
          <Route path='bills' element={<Bills />} />
          <Route path='login' element={<StartPage />} />
          <Route path='workers' element={<Workers />} />
          <Route path='events' element={<Events />} />
          <Route path="ApplicantForm" element={<ApplicantsForm />} />
        </Route>
        <Route path='/user' element={<WindowContainer />} >
          <Route path='forgotPassword' element={<UserForgotPassword />} />
          <Route path='bills' element={<UserBills />} />
          <Route path='birthday' element={<UserBirthday />} />
          <Route path='workers' element={<UserMeetPeople />} />  
          <Route path='news' element={<UserNewsPage />} />   
          <Route path='news/1' element={<UserReadMore />} />
          <Route path='resetPassword' element={<UserResetPassword />} />
          <Route path='dashboard' element={<UserDashboard />} />
          <Route path='login' element={<UserStartPage />} />  
        </Route>  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
