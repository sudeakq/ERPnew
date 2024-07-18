import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartPage from './StartPage';
import WhatsNewClick from './WhatsNewClick';
import DailyReminders from './DailyReminders';
import Events from './Events';
import Intern from './Intern';
import Dashboard from './Dashboard';
import UpcomingBirthdays from './UpcomingBirthdays';
import UpcomingArrivals from './UpcomingArrivals';
import ForgotPassword from './UserSide/ForgotPassword'
import ScheduleView from './Schedule-2';
import Alumni from './Alumni';
import Bills from './Bills';
import AllHous from './AllHouse';
import Applicants from './Applicants';
import Departments from './Departments';
import Workers from './Workers';
import NewsData from './NewsData';
import ApplicantsForm from './ApllicantForm';
import WindowContainer from './WindowContainer';
import WeeklySchedule from './UserSide/UserSchedule';

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
          <Route path='schedule/weekly' element={<WeeklySchedule />} />
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
          <Route path='forgotPassword' element={<ForgotPassword />} /> {/* type the "path" on url and you'll go to the page */}
          <Route path="ApplicantForm" element={<ApplicantsForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
