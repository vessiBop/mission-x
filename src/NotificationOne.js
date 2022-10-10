import './Fonts.css';
import ScreenShotImg from './images/StudentDashboard/makeProject-screenshot.png';



export default function NotificationOne() {
    return (
    <>
    <div className='notification-bar'>
    <img className="submitted-screenshot-img" src={ScreenShotImg} alt="ScreenShot" />
    <div className='notification1'>AIDEN submitted his project</div>
    <div className='notification-date'>WED 22 April 2023  13:21</div>
    </div>
        
        </>
)
    

}