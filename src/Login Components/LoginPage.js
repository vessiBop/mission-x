import teachersImg from './LoginPageImages/teacher.png';
import studentsImg from './LoginPageImages/Students.png';
import { useState } from 'react'
import './LoginPage.css';
import './Login.css';
import LeftCross from './LoginPageImages/Line-4.png'
import RightCross from './LoginPageImages/Line-5.png'


export default function LoginPage() {
const [buttonClass, setButtonClass] = useState('unclicked-btn');
const [buttonClass2, setButtonClass2] = useState('unclicked-btn');
const [buttonClass3, setButtonClass3] = useState('unclicked-btn');
const [buttonClass4, setButtonClass4] = useState('unclicked-btn');
const setButtonAfterClick1 = () => {
    setButtonClass('clicked-btn')
    setButtonClass2('unclicked-btn')
    setButtonClass3('unclicked-btn')
    setButtonClass4('unclicked-btn')

}
const setButtonAfterClick2 = () => {
    setButtonClass('unclicked-btn')
    setButtonClass2('clicked-btn')
    setButtonClass3('unclicked-btn')
    setButtonClass4('unclicked-btn')

}
const setButtonAfterClick3 = () => {
    setButtonClass('unclicked-btn')
    setButtonClass2('unclicked-btn')
    setButtonClass3('clicked-btn')
    setButtonClass4('unclicked-btn')

}
const setButtonAfterClick4 = () => {
    setButtonClass('unclicked-btn')
    setButtonClass2('unclicked-btn')
    setButtonClass3('unclicked-btn')
    setButtonClass4('clicked-btn')

}

    return (
        <>
        <div id='login-parent-container'>
            <div id="left-side">
                <img src={studentsImg} alt="img of student cartoon style" />
                <h1 id="students-header">Students</h1>
                <div id='student-button-div'>    
                    <button onClick={setButtonAfterClick1} className={buttonClass} id='student-log-in-button'>LOG IN</button>
                    <button onClick={setButtonAfterClick2} className={buttonClass2} id='student-sign-up-button'>SIGN UP</button>
                </div>
            </div>
            <div id="right-side">
                <div id='exit-button-div'>
                    <img src={LeftCross}  alt="exit-button" />
                    <img src={RightCross}  alt="exit-button" />
                </div>

                <img src={teachersImg} alt="img of teacher cartoon style" />
                    <h1 id="teachers-header">Teachers</h1>
                        <div id='teacher-button-div'>
                            <button onClick={setButtonAfterClick3} className={buttonClass3} id='teacher-log-in-button'>LOG IN</button>
                            <button onClick={setButtonAfterClick4} className={buttonClass4} id='teacher-sign-up-button'>SIGN UP</button>

                        </div>
            </div>

        </div>
        </>
    ) 
    
}