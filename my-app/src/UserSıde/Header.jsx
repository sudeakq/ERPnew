import Extramus_Text from "../images/extramus_image.png";
import red_logo from "../images/Red-header-logo.png";
import green_logo from "../images/Green-header-logo.png";
import blue_logo from "../images/blue-header-logo.png";
import line from "../images/Line_8.png";
import bell from "../images/Bell.png";
import dropdown_logo from "../images/caret-down-solid.svg";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <div className="left-Header">
        <img src={Extramus_Text} alt="" />
        <div className="Header-logos">
          <img src={red_logo} alt="" />
          <img src={green_logo} alt="" />
          <img src={blue_logo} alt="" />
        </div>
      </div>
      <div className="right-Header">
        <p className="grey">01 September 2021</p>
        <img src={line} alt="" />
        <img src={bell} alt="" />
        <p className="grey">Ebube Samule</p>
        <img src={dropdown_logo} alt="" className="dropdown" />
      </div>
    </div>
  );
}
export default Header;
