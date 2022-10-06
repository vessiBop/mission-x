import "./TeacherProfile.css";
import ProfileCard from "./Components/ProfileCard";
import Footer from "./Footer";
import Nav from "../Navbar";

function TeacherProfile() {
  return (
    <div>
      <Nav />
      <div className="index-layout">
        <ProfileCard />
      </div>
      <Footer />
    </div>
  );
}

export default TeacherProfile;
