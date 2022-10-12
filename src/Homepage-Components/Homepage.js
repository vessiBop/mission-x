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





export default function Homepage() {
    return (
      <div className="parent-div-contains-all-other-divs">
        <Navbar />
        <PrepareYoungMinds />
        <WhatWeOffer />
        <ResponsiveImages />
        <ExplanationsOfProject />
        <FinalSectionBeforeNavbar />
<<<<<<< HEAD:src/Homepage.js
          

=======
        <Footer />
        
        
>>>>>>> fd32d672d0c8d9f19ff3f97b477d3f1c2a337d82:src/Homepage-Components/Homepage.js
      </div>
    );
  }