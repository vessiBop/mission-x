import './Login.css'
import './LoginPage.css'
import LoginPage from './LoginPage'
import Navbar from '../Homepage-Components/Navbar';
import PrepareYoungMinds from '../Homepage-Components/SecondSection';
import WhatWeOffer from '../Homepage-Components/WhatWeOffer';
import ResponsiveImages from '../Homepage-Components/SectionThree';
import ExplanationsOfProject from '../Homepage-Components/Explanations';
import FinalSectionBeforeNavbar from '../Homepage-Components/FinalSection'
import Footer from '../Homepage-Components/Footer';
import '../Homepage-Components/FinalSection.css'
import '../Homepage-Components/Parent-div.css';
import '../Homepage-Components/Navbar.css';
import '../Homepage-Components/Fonts.css';
import '../Homepage-Components/Second-section.css';
import '../Homepage-Components/what-we-offer.css';
import '../Homepage-Components/SectionThree.css';
import '../Homepage-Components/Explanations.css';


export default function Login() {
    return (
        <>
            <div id="login-div">
            <LoginPage />
            </div>
            <div className='parent-div-contains-all-other-divs2'>
            <Navbar />
            <PrepareYoungMinds />
            <WhatWeOffer />
            <ResponsiveImages />
            <ExplanationsOfProject />
            <FinalSectionBeforeNavbar />
            <Footer />
            </div>
                
        
        </>
    )
}