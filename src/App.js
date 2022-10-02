import './Parent-div.css';
import './Navbar.css';
import Navbar from './Navbar';
import './Fonts.css';
import PrepareYoungMinds from './SecondSection';
import './Second-section.css';


function App() {
  return (
    <div className="parent-div-contains-all-other-divs">
      <div><Navbar /></div>
      <div><PrepareYoungMinds /></div>

    </div>
  );
}

export default App;
