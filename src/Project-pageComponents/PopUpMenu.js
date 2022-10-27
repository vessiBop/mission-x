//import StudentsProjectPage from '../StudentsProjectPage';
//import StudentProfileViewer from '../StudentProfileViewer';
//import Homepage from '../Homepage-Components/Homepage';
import { Link } from 'react-router-dom';
import './PopUpMenu.css';
function PopUpMenu() {

    return (
      <div className="pop-up">

       <Link to="/StudentProfileViewer"><div className='My_profile'>My Profile</div></Link>
        <Link to="/StudentsProjectPage"><div className='Setting'>Settings</div></Link>
        <Link to="/"><div className='Log_out'>Log out</div></Link>
      </div>
    );
  }
  export default PopUpMenu;