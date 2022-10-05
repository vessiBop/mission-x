
import './Parent-div.css';
import './Navbar.css';
import Navbar from './Navbar';
import './Fonts.css';
import PrepareYoungMinds from './SecondSection';
import './Second-section.css';
import WhatWeOffer from './WhatWeOffer';
import './what-we-offer.css';
import ResponsiveImages from './SectionThree';
import './SectionThree.css';
import ExplanationsOfProject from './Explanations';
import './Explanations.css';



function App() {
  return (
    <div className="parent-div-contains-all-other-divs">

      <Navbar />
      <PrepareYoungMinds />
      <WhatWeOffer />
      <ResponsiveImages />
      <ExplanationsOfProject />
      

    </div>
  );
}

export default App;
