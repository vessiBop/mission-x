import './Fonts.css';
import { Link } from 'react-router-dom';

// Code for the section below the navbar. Check Second-section.css

export default function PrepareYoungMinds() {
    return (
        <>
            <div className="young-hero-section">
                <div className="prepare-young-minds"></div>
                <div className="sub-header-explaining-website-content">Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</div>
                <div className="first-section-buttons">
                    <button className="first-section-button-one">LEARN MORE</button>
                    <button className="first-section-button-two"><Link to='/login'>SIGN UP</Link></button>
                    <div className="button-two-sign-up-disclaimer">*Basic subscription includes first 15 projects free of charge</div>
                </div>
            </div>
        </>
    )
}