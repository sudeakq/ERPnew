import React from "react";
import "./Birthdays.css";


function Birthdays() {
  return (
    <div class="container">
      <div class="section">
        <h2>Calendar</h2>
        <table class="calendar">
          <thead>
            <tr>
              <th>m</th>
              <th>t</th>
              <th>w</th>
              <th>t</th>
              <th>f</th>
              <th>s</th>
              <th>s</th>
            </tr>
          </thead>
          <tbody>
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
              <td>01</td>
              <td>02</td>
              <td>03</td>
              <td>04</td>
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
  );
}

export default Birthdays