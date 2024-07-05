import React from "react";
import "./WeeklySchedule.css";


function WeeklySchedule() {


  return (
    <>
      <header className="header-week">
        <h1>Weekly Schedule</h1>
        <div className="header-right">
          <button className="nav-button">&#x25C0;</button>
          <span className="date">20 July 2022</span>
          <button className="nav-button">&#9654;</button>
        </div>
      </header>
      <main className="schedule-container">
        <section className="shift" id="morning-shift">
          <h2>Morning shift 8:00 to 13:00</h2>
          <div className="group">
            <h3>Human Resources: 4</h3>
            <ul>
              <li>Isata Sajor Bah</li>
              <li>Katerina Svarcova</li>
              <li>Klara Tlaskalova</li>
              <li>Marvellous Oreoluwa Oseyemi</li>
            </ul>
          </div>
          <div className="group">
            <h3>Data Analyst: 4</h3>
            <ul>
              <li>Dang Thi Phi Yen</li>
              <li>Danil Podtesov</li>
              <li>Bedriye Ekin Uslu</li>
              <li>Rustem Mammedov</li>
            </ul>
          </div>
          <div className="group">
            <h3>Digital Marketing: 3</h3>
            <ul>
              <li>Nida Oral</li>
              <li>Burak Colak</li>
              <li>Metehan Duzcan</li>
            </ul>
          </div>
          <div className="group">
            <h3>Copy Writer: 1</h3>
            <ul>
              <li>Oyku Dilekci</li>
            </ul>
          </div>
          <div className="group">
            <h3>Growth Hacker: 1</h3>
            <ul>
              <li>Akif Kilic</li>
            </ul>
          </div>
          <div className="group">
            <h3>Business Project Management: 3</h3>
            <ul>
              <li>Sanvir Kaur</li>
              <li>Hafiza Noorie</li>
              <li>Julia Wielgus</li>
            </ul>
          </div>
          <div className="group">
            <h3>Architecture & Urban Design: 1</h3>
            <ul>
              <li>Bilge Bahar Saatci</li>
            </ul>
          </div>
        </section>
        <button className="edit">&#x270E;</button>
        <section className="shift" id="afternoon-shift">
          <h2>Afternoon shift 13:00 to 18:00</h2>
          <div className="group">
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
          <div className="group">
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
          <div className="group">
            <h3>User Experience Designer: 1</h3>
            <ul>
              <li>Chidiebube Chiemela Samuel</li>
            </ul>
          </div>
          <div className="group">
            <h3>European Project Manager: 5</h3>
            <ul>
              <li>Fidelix Ayobami</li>
              <li>Beril Yazar</li>
              <li>Adriana Goncalves</li>
              <li>Hatice Cetindere</li>
              <li>Quincy Lawan</li>
            </ul>
          </div>
          <div className="group">
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

export default WeeklySchedule