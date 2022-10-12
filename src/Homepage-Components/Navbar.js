

import './Navbar.css';
import './Fonts.css';
import { Link } from 'react-router-dom';

// Navbar code, check Navbar.css file for the CSS

export default function Navbar() {
    return (
        <><div className="navbar-parent-div">
            <div className="left-side-child-of-navbar"></div>
            <div className="center-child-of-navbar">
                <p className="home-button">HOME</p>
                <p className="features-button">PROJECTS</p>
                <p className="teachers-button">TEACHERS</p>
            </div>
            <div className="right-side-child-of-navbar">
                <p className="user-circle-logo"></p>
                <p className="features-and-login-text"><Link to="/login">FEATURES | LOGIN</Link></p>
                <p className="lang-button">LANG</p>
                <p className="kiwi-flag"></p>
                <p className="maori-flag"></p>
            </div>
        </div></>
    )
}