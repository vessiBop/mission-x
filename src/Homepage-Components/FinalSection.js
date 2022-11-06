import teacherImg from './images/teacher-4784916_1920.png'
import './Fonts.css';
import { Link } from 'react-router-dom';

export default function LastSectionBeforeNavbar() {
    return (
        <div id="final-section-body">
            <div id='left-side-div-final-section'><img src={teacherImg} alt="classroom" id='teacher-img' /></div> { /* left side of the div */}
            <div id='right-side-div-final-section'> { /* right side of the div */}
                    <h1>What are you waiting for?</h1>
                    <h2>Start teaching Digital Technologies today.</h2>
                    <h5>If you need more information, we are happy to answer any questions you may have.</h5>
                    <button id='btn1'>ENQUIRE NOW</button>
                   <button id='btn2'><Link to="/login">SIGN UP</Link></button>
            
            
            
            
            </div>
        </div>
    )
}