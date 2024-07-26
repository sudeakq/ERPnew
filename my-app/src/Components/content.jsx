import React from "react";
import { ContentContainer } from "./content.style";
import DashCard from "./DashCard";
import { FaArrowRightLong } from "react-icons/fa6";
import WeeklyScheduleCard from "./WeeklyScheduleCard";
import DailyReminderCard from "./DailyReminderCard";
import UpcomingBirthdayCard from "./UpcomingBirthdaysCard";
import UpcomingArrivalCard from "./UpcomingArrivalCard";
import { useEffect , useState} from "react";

function Content(){

  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/entries');
        if (response.ok) {
          const data = await response.json();
          setEntries(data);
        } else {
          console.error('Error fetching entries:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);
  
  return (
    <ContentContainer>
      <div className="content-container">
        <div className="content-container-left">
          {/* What's New? Section starts*/}
          <div className="content-container-top">
            <h4>What's New?</h4>
            <div className="view-all">
              <a href="/news">View All </a>
              <p className="view-all-arrow">
                <FaArrowRightLong />
              </p>
            </div>
          </div>
          <DashCard
            day="Fri"
            number={15}
            description="Project Management"
            backgroundColor="rgba(115, 86, 255, 1)"
          />
          <DashCard
            day="Sat"
            number={16}
            description="New Arrival"
            backgroundColor="rgba(78, 151, 232, 1)"
          />
          <DashCard
            day="Sun"
            number={17}
            description="Interview"
            backgroundColor="rgba(76, 139, 210, 1)"
          />
          {/* What's New? Section ends*/}

          {/* Weekly Schedule Section starts*/}
          <div className="content-container-top" style={{ marginTop: "30px" }}>
            <h4>Weekly Schedule</h4>
            <div className="view-all">
              <a href="/schedule">View All </a><p className="view-all-arrow">
                <FaArrowRightLong />
              </p>
            </div>
          </div>
          <WeeklyScheduleCard></WeeklyScheduleCard>
          {/* Weekly Schedule Section ends*/}
        </div>
        <div className="content-container-right">
          <div className="content-container-top">
            <h4>Daily Reminder</h4>
            <div className="view-all">
              <a href="/daily/reminder">View All</a>
              <p className="view-all-arrow">
                <FaArrowRightLong />
              </p>
            </div>
          </div>

          <DailyReminderCard {...{count : 3}} />

          <div className="content-container-middle" style={{}}>
            <h4>Upcoming Arrival and Departure</h4>
            <div className="view-all">
              <a href="/arrivals">View All</a>
              <p className="view-all-arrow">
                <FaArrowRightLong />
              </p>
            </div>
          </div>
          <UpcomingArrivalCard entries={entries} limit={3} />

          <div className="content-container-bottom" style={{}}>
            <h4>Upcoming Birthdays </h4>
            <div className="view-all">
              <a href="/birthdays">View All</a>
              <p className="view-all-arrow">
                <FaArrowRightLong />
              </p>
            </div>
          </div>
          <UpcomingBirthdayCard count={3} />
        </div>
      </div>
    </ContentContainer>
  );
};

export default Content;
