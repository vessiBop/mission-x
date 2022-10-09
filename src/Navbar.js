import './Fonts.css';

// Need to check how to change component divs for the student/teacher dashboard, or create seperate navbars
// Navbar code, check Navbar.css file for the CSS

export default function Navbar() {
    return (
        <><div className="navbar-parent-div">
            <div className="left-side-child-of-navbar"></div>
            <div className="center-child-of-navbar">
                <p className="screenshot">Take Screenshot</p>
                <p className="ask-help">Ask Teacher for help</p>
                <p className="teachers-button">More Projects</p>
            </div>
            <div className="right-side-child-of-navbar">
                <p className="kiwi-flag"></p>
                <p className="maori-flag"></p>
            </div>
        </div></>
    )
}