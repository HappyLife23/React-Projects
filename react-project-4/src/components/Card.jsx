import profile from "../assets/profile.png";
import cameleont from "../assets/Kameleont.jpg"
import office from "../assets/OfficeGirl.jpg";
import profilePic from "../assets/profile-pic.png";


const Card = ({name, age, content}) => {
  return (
    <div className='card'>
      <img className="card-img" src={office} alt="profile-picture" />
      <h1 className="card-titel">{name}</h1>
      <h3>Age: {age}</h3>
      <p className="card-text"><strong>Hobby: </strong>{content}</p>
    </div>
  );
}

export default Card;