import PurpleButton from "../../images/ButtonPurple.png";

function People({ name, jobTitle, image }) {
  return (
    <div className="People">
      <div className="PeopleImg">
        <img src={image} alt="" />
      </div>
      <div className="PeopleDesc">
        <p className="peopleName">{name}</p>
        <p className="peopleJob">{jobTitle}</p>
      </div>
      <div className="btnIcon">
        <img src={PurpleButton} alt="" />
      </div>
    </div>
  );
}
export default People;
