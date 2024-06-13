import React from "react";
import "./Reminders.css";

function Reminders() {
  return (  <>    <h1>Daily Reminders</h1>
      <div class="container">
        <div class="calendar">
          <div class="calendar-header">July 2024</div>
          <div class="calendar-grid">
            <div class="calendar-cell">m</div>
            <div class="calendar-cell">t</div>
            <div class="calendar-cell">w</div>
            <div class="calendar-cell">t</div>
            <div class="calendar-cell">f</div>
            <div class="calendar-cell">s</div>
            <div class="calendar-cell">s</div>
            <div class="calendar-cell">01</div>
            <div class="calendar-cell selected">02</div>
            <div class="calendar-cell">03</div>
            <div class="calendar-cell">04</div>
            <div class="calendar-cell">05</div>
            <div class="calendar-cell">06</div>
            <div class="calendar-cell">07</div>
            <div class="calendar-cell">08</div>
            <div class="calendar-cell">09</div>
            <div class="calendar-cell">10</div>
            <div class="calendar-cell">11</div>
            <div class="calendar-cell">12</div>
            <div class="calendar-cell">13</div>
            <div class="calendar-cell">14</div>
            <div class="calendar-cell">15</div>
            <div class="calendar-cell">16</div>
            <div class="calendar-cell">17</div>
            <div class="calendar-cell">18</div>
            <div class="calendar-cell">19</div>
            <div class="calendar-cell">20</div>
            <div class="calendar-cell">21</div>
            <div class="calendar-cell">22</div>
            <div class="calendar-cell">23</div>
            <div class="calendar-cell">24</div>
            <div class="calendar-cell">25</div>
            <div class="calendar-cell">26</div>
            <div class="calendar-cell">27</div>
            <div class="calendar-cell">28</div>
            <div class="calendar-cell">29</div>
            <div class="calendar-cell">30</div>
            <div class="calendar-cell">31</div>
            <div class="calendar-cell">01</div>
            <div class="calendar-cell">02</div>
            <div class="calendar-cell">03</div>
            <div class="calendar-cell">04</div>
          </div>
        </div>
        <div class="list">
          <div class="list-item">
            <div class="list-item-dot red"></div>
            <div class="list-item-text">HR Presentation</div>
            <div class="list-item-time">
              <span>Tomorrow</span>
              <i class="icon-clock"></i>
            </div>
          </div>
          <div class="list-item">
            <div class="list-item-dot yellow"></div>
            <div class="list-item-text">HR Interview: Wilson</div>
            <div class="list-item-time">
              <span>10 September 2021</span>
              <i class="icon-calendar"></i>
            </div>
          </div>
          <div class="list-item">
            <div class="list-item-dot yellow"></div>
            <div class="list-item-text">HR Interview: Samara</div>
            <div class="list-item-time">
              <span>10 September 2021</span>
              <i class="icon-calendar"></i>
            </div>
          </div>
          <div class="list-item">
            <div class="list-item-dot green"></div>
            <div class="list-item-text">Applicants</div>
            <div class="list-item-time">
              <span>Everyday</span>
              <i class="icon-clock"></i>
            </div>
          </div>
          <div class="list-item">
            <div class="list-item-dot green"></div>
            <div class="list-item-text">Check Emails and Calendly</div>
            <div class="list-item-time">
              <span>Everyday</span>
              <i class="icon-clock"></i>
            </div>
          </div>
        </div>
      </div>
      </>

  );
}

export default Reminders