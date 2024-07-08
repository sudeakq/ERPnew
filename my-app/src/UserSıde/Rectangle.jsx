import down_blueLine from "../images/down-blue-line.png";
function Rectangle({ id, selectedId }) {
  return (
    <>
      {id && selectedId === id ? (
        <img src={down_blueLine} alt="" />
      ) : (
        <img src={down_blueLine} alt="" className="hidden" />
      )}
    </>
  );
}
export default Rectangle;
