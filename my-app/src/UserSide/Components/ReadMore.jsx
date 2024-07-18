import leftIcon from "../../images/chevron-left-solid.svg";
import rightIcon from "../../images/chevron-right-solid.svg";
import profileImg from "../../images/Profile-img.png";
import dot from "../../images/dot.png";
import "./ReadMore.css";
function ReadMore() {
  return (
    <div className="ReadMorePage">
      <div className="Container-ReadMore">
        <div className="Heading bold">
          <img src={profileImg} alt="" />
          <p>posted by Antonio Gallo</p>
          <img src={dot} alt="" className="dot" />
          <p>23 august 2024</p>
        </div>
        <div className="Contain">
          <p>
            On monday 23 August there will be a presentation from project
            management regarding the theater platform. Please prepare the
            necessary documents.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="pageNumber">
        <img src={leftIcon} alt="" className="arrowSvg" />
        <p>1/4</p>
        <img src={rightIcon} alt="" className="arrowSvg" />
      </div>
    </div>
  );
}
export default ReadMore;
