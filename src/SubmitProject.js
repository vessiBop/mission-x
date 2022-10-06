import ScreenShotImg from './images/StudentDashboard/makeProject-screenshot.png';
import './Fonts.css';

const imageStyles = { maxWidth: 100 };

// Code for the Upload Screenshot and Show Teacher section

export default function UploadScreen() {
    return (
        <>
            <div className="upload-parent-container">
                <div className="upload-split-div">
                    <img styles={imageStyles} className="screenshot-img" src={ScreenShotImg} alt="ScreenShot" />
                    <div className="submit-text1">Submit project photo</div>
                    <div className="submit-text2">After completing your project, take a screenshot and upload it here</div>
                </div>
            </div>
        </>
    )
}