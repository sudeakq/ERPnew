import dashboard_logo from "../images/Dashboard.png";
import Calendar from "../images/Calendar.png";
import list from "../images/List_ul.png";
import Home from "../images/home.png";
import down_blueLine from "../images/down-blue-line.png";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="dashboard Sidebar-list selected">
        <div className="sidebar-menu">
          <img src={down_blueLine} alt="" />
          <img src={dashboard_logo} alt="" />
          <p>Dashboard</p>
        </div>
      </div>
      <div className="date Sidebar-list">
        <div className="Schedule sidebar-menu">
          <img src={down_blueLine} alt="" />
          <img src={Calendar} alt="" />
          <p>Schedule</p>
        </div>
        <div className="Departments sidebar-menu">
          <img src={down_blueLine} alt="" />
          <img src={Calendar} alt="" />
          <p>Departments</p>
        </div>
      </div>
      <div className="side-3 Sidebar-list">
        <div className="New_Applicants sidebar-menu">
          <img src={down_blueLine} alt="" />
          <img src={list} alt="" />
          <p>New Applicants</p>
        </div>
        <div className="Interns sidebar-menu">
          <img src={down_blueLine} alt="" />
          <img src={list} alt="" />
          <p>Interns</p>
        </div>
        <div className="Alumni sidebar-menu">
          <img src={down_blueLine} alt="" />
          <img src={list} alt="" />
          <p>Alumni</p>
        </div>
      </div>
      <div className="side-4 Sidebar-list">
        <div className="Houses sidebar-menu">
          <img src={down_blueLine} alt="" />
          <img src={Home} alt="" />
          <p>Houses</p>
        </div>
        <div className="Bills sidebar-menu">
          <img src={down_blueLine} alt="" />
          <img src={list} alt="" />
          <p>Bills</p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
