import './FinalSection.css';
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
import FinalSectionBeforeNavbar from './FinalSection';
import Footer from './Footer';
import './Footer.css'



function App() {
  return (
    <div className="parent-div-contains-all-other-divs">

      <Navbar />
      <PrepareYoungMinds />
      <WhatWeOffer />
      <ResponsiveImages />
      <ExplanationsOfProject />
      <FinalSectionBeforeNavbar />
      <Footer />      

    </div>
  );
}

export default App;
