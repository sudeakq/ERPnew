import blueLine from "../images/blue-arrow-right.png";
import clock from "../images/icon-clock.png";
import "./Content.css";
function Content() {
  return (
    <div className="Container">
      <div className="Top-Sections">
        <div className="New-Section">
          <div className="Header-News HeadFlex">
            <h3>What's New</h3>
            <div className="right-H_news">
              <b className="blue">View All (18)</b>
              <img src={blueLine} alt="" />
            </div>
          </div>
          <div className="News">
            <div className="New">
              <div className="new-left">
                <div className="white">
                  <h2>Fri</h2>
                  <h2>15</h2>
                </div>
                <b>Event with the Extramus</b>
              </div>
              <p className="cizgi">Read More</p>
            </div>
            <div className="New">
              <div className="new-left">
                <div className="white">
                  <h2>Sat</h2>
                  <h2>16</h2>
                </div>
                <b>Lesson of Italian</b>
              </div>
              <p className="cizgi">Read More</p>
            </div>
            <div className="New">
              <div className="new-left">
                <div className="white">
                  <h2>Sun</h2>
                  <h2>17</h2>
                </div>
                <b>Birthday of Guillermo</b>
              </div>
              <p className="cizgi">Read More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Bottom-Sections">
        <div className="Schedule-Section">
          <div className="Head-Schedule HeadFlex">
            <h3>Weekly Schedule</h3>
            <b className="blue">View All</b>
          </div>
          <div className="content-schedule">
            <div className="left-Schedule">
              <p>20 july 2022</p>
              <p>posted by Antonio Gallo</p>
            </div>
            <div className="mid-Schedule">
              <p>Morning shift 8:00 to 13.00</p>
              <p>Human Resources:4</p>
              <ul>
                <li>Isata Sajor Bah</li>
                <li>Katerina Svarcova</li>
                <li>Klara Tlaskalova</li>
                <li>Marvellous Oreoluwa Oseyemi</li>
              </ul>
            </div>
            <div className="right-Schedule">
              <p className="cizgi">Read More</p>
            </div>
          </div>
        </div>
        <div className="Birthdays-Section">
          <div className="Head-Birthday HeadFlex">
            <h3>Upcoming Birthdays🎂🎉🍾</h3>
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
    </div>
  );
}
export default Content;
