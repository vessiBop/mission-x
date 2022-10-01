import './Parent-div.css';
import './Navbar.css';
import Navbar from './Navbar';
import './Fonts.css';


function App() {
  return (
    <div className="Parent-div-contains-all-other-divs">
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
