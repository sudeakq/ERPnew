import down_blueLine from "../images/down-blue-line.png";
import "./Rectangle.css";
function Rectangle({ id, selectedId }) {
  return (
    <>
      {id && selectedId === id ? (
        <img src={down_blueLine} alt="" className=" blue-line" />
      ) : (
        <img src={down_blueLine} alt="" className="hidden blue-line" />
      )}
    </>
  );
}
export default Rectangle;
