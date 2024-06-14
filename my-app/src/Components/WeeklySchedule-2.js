import React from "react";
import "./WeeklySchedule-2.css";


function WeeklyScheduleView() {


  return (
    <>
      <header class="header-week">
        <h1>Weekly Schedule</h1>
        <div class="header-right">
          <button class="nav-button">&#x25C0;</button>
          <span class="date">20 July 2022</span>
          <button class="nav-button">&#9654;</button>
        </div>
      </header>
      <main class="schedule-container">
        <section class="shift" id="morning-shift">
          <h2>Morning shift 8:00 to 13:00</h2>
          
        </section>
        <button class="edit">&#8644;</button>
        <section class="shift" id="afternoon-shift">
          <h2>Afternoon shift 13:00 to 18:00</h2>
          <div class="group">
            <h3>Information Technology: 13</h3>
            <ul>
              <li>Krist Baliev</li>
              <li>Asli Karacali</li>
              <li>Maksim Syryavchev</li>
              <li>Eneada Sulaj</li>
              <li>Anouar Abou-er-Raja</li>
              <li>Sajjad Khan</li>
            </ul>
          </div>
          <div class="group">
            <h3>Human Resources: 6</h3>
            <ul>
              <li>Alexandru Szoke-Manea</li>
              <li>Sergiu Mateiu</li>
              <li>Lia Ciobanu</li>
              <li>Rimma Cezhir</li>
              <li>Oladiimeji Rahim Aremu</li>
              <li>Sinem Turkcu</li>
            </ul>
          </div>
          <div class="group">
            <h3>User Experience Designer: 1</h3>
            <ul>
              <li>Chidiebube Chiemela Samuel</li>
            </ul>
          </div>
          <div class="group">
            <h3>European Project Manager: 5</h3>
            <ul>
              <li>Fidelix Ayobami</li>
              <li>Beril Yazar</li>
              <li>Adriana Goncalves</li>
              <li>Hatice Cetindere</li>
              <li>Quincy Lawan</li>
            </ul>
          </div>
          <div class="group">
            <h3>Business Lawyer: 1</h3>
            <ul>
              <li>Sibusio Dominic Mabaso</li>
              <li>Vimbainashe Vanessa Shumbahete</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default WeeklyScheduleView