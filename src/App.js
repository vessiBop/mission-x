import './Parent-div.css';
import './Navbar.css';
import Navbar from './Navbar';
import './Fonts.css';

import StudentProject from './Project';



function App() {
  return (
    <div className="parent-div-contains-all-other-divs">

    <Navbar />
   
   <StudentProject />

  </div>
  );
}

export default App;
