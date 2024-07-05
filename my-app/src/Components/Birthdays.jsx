import React from "react";
import { BirthdaysContainer } from "./Birthdays.style";

function Birthdays() {

  return (
    <BirthdaysContainer>
    <div class="containeor">
      <div class="section">
        <h2>Calendar</h2>
        <table class="calendar">
          <thead>
            <tr>
              <th><span class="arrow" id="prevMonth">&#9664;</span></th>
              <th colspan="5"><h3>July 2024</h3></th>
              <th><span class="arrow" id="nextMonth">&#9654;</span></th>
            </tr>
            <tr>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>TH</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="prev-month">01</td>
              <td class="prev-month">02</td>
              <td class="prev-month">03</td>
              <td class="prev-month">04</td>
              <td class="prev-month">05</td>
              <td class="prev-month">06</td>
              <td class="prev-month">07</td>
            </tr>
            <tr>
              <td>01</td>
              <td>02</td>
              <td>03</td>
              <td>04</td>
              <td>05</td>
              <td>06</td>
              <td>07</td>
            </tr>
            <tr>
              <td>08</td>
              <td>09</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td class="next-month">01</td>
              <td class="next-month">02</td>
              <td class="next-month">03</td>
              <td class="next-month">04</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section">
        <h2>Upcoming Birthdays</h2>
        <table class="list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ebube Samuel</td>
              <td>ICT</td>
              <td>Today</td>
            </tr>
            <tr>
              <td>Klara Tlaskalová</td>
              <td>Human Resource</td>
              <td>13 September</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </BirthdaysContainer>
  );
}

export default Birthdays