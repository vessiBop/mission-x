
import './Parent-div.css';
import './Navbar.css';
import Navbar from './Navbar';
import './Fonts.css';
import PrepareYoungMinds from './SecondSection';
import './Second-section.css';
import WhatWeOffer from './WhatWeOffer';
import './what-we-offer.css';
import { useState } from 'react';



function App() {
  return (
    <div className="parent-div-contains-all-other-divs">

      <Navbar />
      <PrepareYoungMinds />
      <WhatWeOffer />
      

    </div>
  );
}

export default App;
