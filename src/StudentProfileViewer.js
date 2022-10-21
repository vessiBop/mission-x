import Navbar from './Homepage-Components/Navbar'
import Footer from './Homepage-Components/Footer';
import StudentCard from './StudentProfileViewerComponents/StudentCard';
import BackButton from './StudentProfileViewerComponents/StdPageBack-button';
import './StudentProfileViewer.css';
function StudentProfileViewer() {
  return (
    <div>
      <div><Navbar/></div>
<div  className="class-main">
     <div> <StudentCard/></div>
    <div> <BackButton/></div>
      <div><Footer/></div>
      </div>
    </div>
  );
}

export default StudentProfileViewer;
