import Navbar from './Homepage-Components/Navbar'
import Footer from './Homepage-Components/Footer';
import StudentCard from './StudentProfileViewerComponents/StudentCard';
import Backbutton from './StudentProfileViewerComponents/StdPageBackbutton';
import './StudentProfileViewerComponents/StudentCard.css'
function StudentProfileViewer() {
  return (
    <div>
      <div><Navbar/></div>
<div  className="main">
     <div> <StudentCard/></div>
    <div>  <Backbutton/></div>
    </div>
      <div><Footer/></div>
    </div>
  );
}

export default StudentProfileViewer;
