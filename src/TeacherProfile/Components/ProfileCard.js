import "./ProfileCard.css";
import pic from "./Images/Ellipse 38.png";
import ChangePhoto from "./Images/Change Photo.png";
import Edit from "./Images/Edit Profile.png";
import Setting from "./Images/Setting.png";

function ProfileCard() {
  return (
    <div className="index">
      <div className="profile-card">
        <img src={pic} alt={"Profile Pic"} className="image" />
        <img src={Edit} alt={"Profile Pic"} className="button" />
        <img src={ChangePhoto} alt={"Profile Pic"} className="button" />
        <img src={Setting} alt={"Profile Pic"} className="button" />
      </div>
      <div className="profile-info">
        <h1>Jasmina Salvador</h1>
        <div className="profile-layout">
          <div className="info">
            <h2>School</h2>
            <h2>Courses Purchased</h2>
            <h2>Date of Birth</h2>
            <h2>Contact No</h2>
            <h2>Email Address</h2>
          </div>
          <div className="user-info">
            <h2>Homai School</h2>
            <h2>Beginner</h2>
            <h2>25 June 1986</h2>
            <h2>027 754 28 00</h2>
            <h2>jsalvador@homai.edu</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
