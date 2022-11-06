import Navbar from "./Homepage-Components/Navbar";
import Footer from "./Homepage-Components/Footer";
import StudentCard from "./StudentProfileViewerComponents/StudentCard";
import BackButton from "./StudentProfileViewerComponents/StdPageBack-button";
import "./StudentProfileViewer.css";
function StudentProfileViewer() {
  fetch("http://localhost:4002/students/:id")
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="class-main">
        <div>
          <StudentCard />
        </div>
        <div>
          <BackButton />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default StudentProfileViewer;
