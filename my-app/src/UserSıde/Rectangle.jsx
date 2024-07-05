import Rectangle_1 from "../images/Rectangle_1.png";
function Rectangle({ id, selectedId, isSelected }) {
  return (
    <>
      {isSelected && selectedId === id ? (
        <img src={Rectangle_1} alt="" className="Rectangle" />
      ) : (
        <img src={Rectangle_1} alt="" className="Rectangle Hidden" />
      )}
    </>
  );
}
export default Rectangle;
