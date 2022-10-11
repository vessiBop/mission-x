import Navbar from './Navbar';
import SideMenu from './SideMenu';
import UploadScreen from './SubmitProject';
import ShowTeacher from './ShowTeacher';




import './Navbar.css';
import './SubmitProject.css';
import './Parent-div.css';
import './Fonts.css';
import './App.css';
import SideBar from './SideBar/SideBar';
import ProjectSubs from './ProjectSubs';


function App() {
  return (
    <div className="parent-div-contains-all-other-divs">
      <Navbar />
      
      
      <SideBar/>
      
      

      <UploadScreen />
    </div>
  );
}

export default App;
