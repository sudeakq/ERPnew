import { useEffect, useState } from "react";
import leftIcon from "../../images/chevron-left-solid.svg";
import RightIcon from "../../images/chevron-right-solid.svg";
import "./WeeklySchedule.css";
import axios from "axios";
function WeeklySchedule() {
  return (
    <div className="WeeklySchedule">
      <div className="HeadingSchedule">
        <h1>Weekly Schedule</h1>
        <div className="dateSchedule">
          <img src={leftIcon} alt="" className="arrowIcons" />
          <p>20 July 2022</p>
          <img src={RightIcon} alt="" className="arrowIcons" />
        </div>
      </div>
      <div className="ContainShift-Schedule">
        <div className="Shifts">
          <h2>Morning shift 8:00 to 13:00</h2>
          <div className="FirstShift Shift">
            <div className="list1">
              <p className="listTitle">Human Resources: 4​​​​​​</p>
              <ul>
                <li>Isata Sajor Bah</li>
                <li>Katerina Svarcova</li>
                <li>Klara Tlaskalova</li>
                <li>Marvellous Oreoluwa Oseyemi</li>
              </ul>
            </div>
            <div className="list2">
              <p className="listTitle">Data Analyst: 4​​​​​​</p>
              <ul>
                <li>Dang Thi Phi Yen</li>
                <li>Daniil Podtesov</li>
                <li>Bedriye Ekin Uslu</li>
                <li>Rustem Mammedov</li>
              </ul>
            </div>
            <div className="list3">
              <p className="listTitle">Digital Marketing: 3​​​​​​</p>
              <ul>
                <li>Nida Oral</li>
                <li>Burak Colak</li>
                <li>Metehan Duzcan </li>
              </ul>
            </div>
            <div className="list4">
              <p className="listTitle">Copy Writer: 1​​​​​​</p>
              <ul>
                <li>Oyku Dilekci</li>
              </ul>
            </div>
            <div className="list5">
              <p className="listTitle">Growth Hacker: 1​​​​​​</p>
              <ul>
                <li>Akif Kilic​</li>
              </ul>
            </div>
            <div className="list6">
              <p className="listTitle">Business Project Management: 3</p>
              <ul>
                <li>Sanvir Kaur​</li>
                <li>Hafiza Noorie​</li>
                <li>Julia Wielgus​​​​​​</li>
              </ul>
            </div>
            <div className="list7">
              <p className="listTitle">Architecture & Urban Design: 1​</p>
              <ul>
                <li>Bilge Bahar Saatci</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Shifts">
          <h2>Afternoon shift 13:00 to 18:00</h2>
          <div className="SecondShift Shift">
            <div className="list1">
              <p className="listTitle">Information Technology: 13​​​​​​</p>
              <ul>
                <li>Asli Karacali</li>
                <li>Maksim Syrvachev</li>
                <li>Eneada Sulaj</li>
                <li>Anouar Abou-er-Raja</li>
                <li>Sajjad Khan</li>
              </ul>
            </div>
            <div className="list2">
              <p className="listTitle">Human Resources: 6​</p>
              <ul>
                <li>Alexandru Szoke-Manea</li>
                <li>Sergiu Mateiu</li>
                <li>Lia Ciobanu</li>
                <li>Rimma Cechir</li>
                <li>Oladimeji Rahim Aremu</li>
                <li>Sinem Turkcu</li>
              </ul>
            </div>
            <div className="list3">
              <p className="listTitle">User Experience Designer: 1​</p>
              <ul>
                <li>Chidiebube Chiemela Samuel</li>
              </ul>
            </div>
            <div className="list4">
              <p className="listTitle">European Project manager: 5​​</p>
              <ul>
                <li>Fidelix Ayobami</li>
                <li>Beril Yazar</li>
                <li>Adriana Goncalves</li>
                <li>Hatice Cetindere</li>
                <li>Quincy Lawan</li>
              </ul>
            </div>
            <div className="list5">
              <p className="listTitle">Business Lawyer: 1</p>
              <ul>
                <li>Sibusiso Dominic Mabaso</li>
                <li>Vimbainashe Vanessa Shumbanhete</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeeklySchedule;
