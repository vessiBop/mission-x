import ScreenShotImg from './images/StudentDashboard/makeProject-screenshot.png';
import SubmitPhoto from './images/StudentDashboard/submitProject-Photo.png';
import CallTeacher from './images/StudentDashboard/callTeacher.png';
import FileStack from './FileStack';
import './Fonts.css';



// Code for the Upload Screenshot and Show Teacher section

export default function UploadScreen() {
    return (
        <>
            <div className="upload-parent-container">
                <div className="upload-split-div">
                    <img className="screenshot-img" src={ScreenShotImg} alt="ScreenShot" />
                    <div className="submit-text1">Submit project photo</div>
                    <div className="submit-text2">After completing your project, take a screenshot and upload it here</div>
                    <div className="show-teacher1">Show your teacher</div>
                    <div className="show-teacher2">If your teacher is in the same room as you, click the button below to let them know you are done</div>
                        <div className="submit-butt">
                            <FileStack className="filestack" />
                            Send Photo
                            </div>
                    <div className="submit-butt2"></div>
                    <img className="subphoto-img" src={SubmitPhoto} alt="Submit" />
                        <div className="call-teacher-butt">
                            <img className="call-img" src={CallTeacher} alt="CallTeach" />
                            <div>Call Teacher</div>
                        </div>
                </div>
            </div>
        </>
    )
}