import React from "react";
import Extramus_Text from "../images/extramus_image.png";
import red_logo from "../images/Red-header-logo.png";
import green_logo from "../images/Green-header-logo.png";
import blue_logo from "../images/blue-header-logo.png";
import line from "../images/Line_8.png";
import bell from "../images/Bell.png";
import dropdown_logo from "../images/caret-down-solid.svg";
import dashboard_logo from "../images/Dashboard.png";
import Calendar from "../images/Calendar.png";
import list from "../images/List_ul.png";
import Home from "../images/home.png";

function UserDashboard() {
  return (
    <>
      <div className="Header">
        <div className="left-Header">
          <img src={Extramus_Text} alt="" />
          <div className="Header-logos">
            <img src={red_logo} alt="" />
            <img src={green_logo} alt="" />
            <img src={blue_logo} alt="" />
          </div>
        </div>
        <div className="right-Header">
          <p>01 September 2021</p>
          <img src={line} alt="" />
          <img src={bell} alt="" />
          <p>Ebube Samule</p>
          <img src={dropdown_logo} alt="" />
        </div>
      </div>
      <div className="Main">
        <div className="Sidebar">
          <div className="dashboard sidebar-menu">
            <img src={dashboard_logo} alt="" />
            <p>Dashboard</p>
          </div>
          <div className="date">
            <div className="Schedule sidebar-menu">
              <img src={Calendar} alt="" />
              <p>Schedule</p>
            </div>
            <div className="Departments sidebar-menu">
              <img src={Calendar} alt="" />
              <p>Departments</p>
            </div>
          </div>
          <div className="side-3">
            <div className="New_Applicants sidebar-menu">
              <img src={list} alt="" />
              <p>New Applicants</p>
            </div>
            <div className="Interns sidebar-menu">
              <img src={list} alt="" />
              <p>Interns</p>
            </div>
            <div className="Alumni sidebar-menu">
              <img src={list} alt="" />
              <p>Alumni</p>
            </div>
          </div>
          <div className="side-4">
            <div className="Houses sidebar-menu">
              <img src={Home} alt="" />
              <p>Houses</p>
            </div>
            <div className="Bills sidebar-menu">
              <img src={list} alt="" />
              <p>Bills</p>
            </div>
          </div>
        </div>
        <div className="Container">
          <div className="Top-Sections">
            <div className="New-Section">
              <div className="Header-News">
                <p>What's New</p>
                <div className="right-H_news">
                  <p>View All (18)</p>
                  <img src="" alt="" />
                </div>
              </div>
              <div className="News">
                <div className="New">
                  <h1>Fri 15</h1>
                  <p>Event with the Extramus</p>
                  <p className="cizgi">Read More</p>
                </div>
                <div className="New">
                  <h1>Sat 16</h1>
                  <p>Lesson of Italian</p>
                  <p className="cizgi">Read More</p>
                </div>
                <div className="New">
                  <h1>Sun 17</h1>
                  <p>Birthday of Guillermo</p>
                  <p className="cizgi">Read More</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Bottom-Sections">
            <div className="Schedule-Section">
              <div className="Head-Schedule">
                <h1>Weekly Schedule</h1>
                <h2 className="blue">View All</h2>
              </div>
              <div className="content">
                <div className="left-Schedule">
                  <p>20 july 2022</p>
                  <p>posted by Antonio Gallo</p>
                </div>
                <div className="mid-Schedule">
                  <p>Morning shift 8:00 to 13.00</p>
                  <p>Human Resources:4</p>
                  <ol>
                    <li>Isata Sajor Bah</li>
                    <li>Katerina Svarcova</li>
                    <li>Klara Tlaskalova</li>
                    <li>Marvellous Oreoluwa Oseyemi</li>
                  </ol>
                </div>
                <div className="right-Schedule">
                  <p className="cizgi">Read More</p>
                </div>
              </div>
            </div>
            <div className="Birthdays">
              <div className="Head-Birthday">
                <h1>Upcoming Birthdays🎂🎉🍾</h1>
                <p className="blue">View All (8)</p>
              </div>
              <div className="Content-Birthday">
                <div className="Birthday">
                  <div className="left-B">
                    <b>Ebube Samuel</b>
                    <p>ICT</p>
                  </div>
                  <div className="right-B">
                    <p className="Birthday-time">Today</p>
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="Birthday">
                  <div className="left-B">
                    <b>Klara Tlaskalova</b>
                    <p>Human Resource</p>
                  </div>
                  <div className="right-B">
                    <p className="birthday-time">13 September</p>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
