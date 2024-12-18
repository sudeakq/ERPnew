import clock from "../../images/icon-clock.png";
import { BirthdayContainer } from "./Birthday.style";

/* import "./Birthday.css";*/

function Birthday() {
  return (
    <BirthdayContainer>
      <div className="Heading">
        <h1>Upcoming Birthdays🎂🎉🍾</h1>
      </div>
      <div className="Contain-Birthday">
        <div className="Calendar-Section">
          <h1>Calendar</h1>
          <div className="CalendarContain">
            <p className="title">July 2024</p>
            <table>
              <tr className="calendarDays">
                <td>m</td>
                <td>t</td>
                <td>w</td>
                <td>t</td>
                <td>f</td>
                <td>s</td>
                <td>s</td>
              </tr>
              <tr>
                <td>01</td>
                <td className="selectedDate">02</td>
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
                <td className="greyDay">01</td>
                <td className="greyDay">02</td>
                <td className="greyDay">03</td>
                <td className="greyDay">04</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="Birthdays-Section">
          <h1>List</h1>
          <div className="Content-Birthday">
            <div className="Birthday">
              <div className="left-B">
                <b>Ebube Samuel</b>
                <p>ICT</p>
              </div>
              <div className="right-B">
                <p className="Birthday-time">Today</p>
                <img src={clock} alt="" />
              </div>
            </div>
            <div className="Birthday">
              <div className="left-B">
                <b>Klara Tlaskalova</b>
                <p>Human Resource</p>
              </div>
              <div className="right-B">
                <p className="birthday-time">13 September</p>
                <img src={clock} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BirthdayContainer>
  );
}
export default Birthday;
