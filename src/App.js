
import './FinalSection.css';
import './Parent-div.css';
import './Navbar.css';
import './Fonts.css';
import './Second-section.css';
import './what-we-offer.css';
import './SectionThree.css';
import './Explanations.css';
import Homepage from './Homepage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
