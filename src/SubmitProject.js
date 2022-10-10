import ScreenShotImg from './images/StudentDashboard/makeProject-screenshot.png';
import UploadImg from './images/StudentDashboard/sendPhoto.png';
import SubmitPhoto from './images/StudentDashboard/submitProject-Photo.png';
import CallTeacher from './images/StudentDashboard/callTeacher.png';

import './Fonts.css';

const imageStyles = { maxWidth: 200 };

// Code for the Upload Screenshot and Show Teacher section

export default function UploadScreen() {
    return (
        <>
            <div className="upload-parent-container">
                <div className="upload-split-div">
                    <img styles={imageStyles} className="screenshot-img" src={ScreenShotImg} alt="ScreenShot" />
                    <div className="submit-text1">Submit project photo</div>
                    <div className="submit-text2">After completing your project, take a screenshot and upload it here</div>
                    <div className="show-teacher1">Show your teacher</div>
                    <div className="show-teacher2">If your teacher is in the same room as you, click the button below to let them know you are done</div>

                    <div className="submit-butt">
                        
                        <img styles={imageStyles} className="upload-img" src={UploadImg} alt="UploadImg" />
                        
                        

                        
                    </div>


                    <div className="submit-butt2">
                                     
                    
                    </div>
                    <img styles={imageStyles} className="subphoto-img" src={SubmitPhoto} alt="Submit" />

                    <div className="call-teacher-butt">

                    <img styles={imageStyles} className="call-img" src={CallTeacher} alt="CallTeach" />

                    <div>Call Teacher</div>
                    </div>

                    
                </div>

                    
                    
                   
            </div>
            
        </>
    )
}