import PurpleButton from "../images/ButtonPurple.png";
import PeopleImg from "../images/PeopleImg.png";
import "./MeetPeople.css";
function MeetPeople() {
  return (
    <>
      <div className="MeetPeople">
        <h1>MEET THE PEOPLE</h1>
        <div className="Peoples">
          <div className="People">
            <div className="PeopleImg">
              <img src={PeopleImg} alt="" />
            </div>
            <div className="PeopleDesc">
              <p className="peopleName">John Doe</p>
              <p className="peopleJob">Full Stack</p>
            </div>
            <div className="btnIcon">
              <img src={PurpleButton} alt="" />
            </div>
          </div>
          <div className="People">
            <div className="PeopleImg">
              <img src={PeopleImg} alt="" />
            </div>
            <div className="PeopleDesc">
              <p className="peopleName">John Doe</p>
              <p className="peopleJob">Full Stack</p>
            </div>
            <div className="btnIcon">
              <img src={PurpleButton} alt="" />
            </div>
          </div>
          <div className="People">
            <div className="PeopleImg">
              <img src={PeopleImg} alt="" />
            </div>
            <div className="PeopleDesc">
              <p className="peopleName">John Doe</p>
              <p className="peopleJob">Full Stack</p>
            </div>
            <div className="btnIcon">
              <img src={PurpleButton} alt="" />
            </div>
          </div>
          <div className="People">
            <div className="PeopleImg">
              <img src={PeopleImg} alt="" />
            </div>
            <div className="PeopleDesc">
              <p className="peopleName">John Doe</p>
              <p className="peopleJob">Full Stack</p>
            </div>
            <div className="btnIcon">
              <img src={PurpleButton} alt="" />
            </div>
          </div>
          <div className="People">
            <div className="PeopleImg">
              <img src={PeopleImg} alt="" />
            </div>
            <div className="PeopleDesc">
              <p className="peopleName">John Doe</p>
              <p className="peopleJob">Full Stack</p>
            </div>
            <div className="btnIcon">
              <img src={PurpleButton} alt="" />
            </div>
          </div>
          <div className="People">
            <div className="PeopleImg">
              <img src={PeopleImg} alt="" />
            </div>
            <div className="PeopleDesc">
              <p className="peopleName">John Doe</p>
              <p className="peopleJob">Full Stack</p>
            </div>
            <div className="btnIcon">
              <img src={PurpleButton} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MeetPeople;
