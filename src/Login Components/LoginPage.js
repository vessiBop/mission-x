import teachersImg from './LoginPageImages/teacher.png';
import studentsImg from './LoginPageImages/Students.png';
import { useState } from 'react'
import './LoginPage.css';
import './Login.css';
import LeftCross from './LoginPageImages/Line-4.png'
import RightCross from './LoginPageImages/Line-5.png'
import { Link } from 'react-router-dom'; 

export default function LoginPage() {

// useState functions for buttons
const [buttonClass, setButtonClass] = useState('unclicked-btn');
const [buttonClass2, setButtonClass2] = useState('clicked-btn');
const [buttonClass3, setButtonClass3] = useState('unclicked-btn');
const [buttonClass4, setButtonClass4] = useState('clicked-btn');

// useState functions for form changes
const [studentForm, setStudentForm] = useState('student-form-sign-up');
const [studentForm1, setStudentForm1] = useState('student-form-log-in1');
const [teacherForm, setTeacherForm] = useState('teacher-form-sign-up');
const [teacherForm1, setTeacherForm1] = useState('teacher-form-log-in1');


// functions for changing thebuttons on teacher and student side seperately

const setButtonAfterClick1 = () => {
    setButtonClass('clicked-login-btn')
    setButtonClass2('unclicked-btn')
    setStudentForm('student-form-log-in1')
    setStudentForm1('student-form-sign-up')
    

}
const setButtonAfterClick2 = () => {
    setButtonClass('unclicked-btn')
    setButtonClass2('clicked-btn')
    setStudentForm('student-form-log-in')
    setStudentForm1('student-form-sign-up1')
    

}
const setButtonAfterClick3 = () => { 
    setButtonClass3('clicked-login-btn')
    setButtonClass4('unclicked-btn')
    setTeacherForm('teacher-form-log-in1')
    setTeacherForm1('teacher-form-sign-up')
    

}
const setButtonAfterClick4 = () => {
    setButtonClass3('unclicked-btn')
    setButtonClass4('clicked-btn')
    setTeacherForm('teacher-form-log-in')
    setTeacherForm1('teacher-form-sign-up1')
    

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
                <form id={studentForm} method="post"> {/* two student forms one is sign up one is log in. changed with useState */}
                    <input class='text-fields' type='text' id='fname' name='fname' placeholder='Full Name' required autoComplete='on'/> <br />
                    <input class='text-fields' type='email' id='email' name='email' placeholder='Email Address' required autoComplete='on'/> <br />
                    <input class='text-fields' type='password' id='password' name='password' placeholder='Password (8 characters minimum)' minLength='8' required /> <br />
                    <input class='text-fields' type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' required />
                    <input type='submit' value='SIGN UP' id='SIGN-UP'/>
                </form>
                <form id={studentForm1} method="post">
                    <input class='text-fields' type='email' id='email' name='email' placeholder='Email Address' required autoComplete='on'/> <br />
                    <input class='text-fields' type='password' id='password' name='password' placeholder='Password' required /> <br />
                    <input type='submit' value='SIGN IN' id='SIGN-UP'/>
                </form>

            </div>
            <div id="right-side">
                <div id='exit-button-div'>
                    <Link to="/"><img src={LeftCross}  alt="exit-button" />
                    <img src={RightCross}  alt="exit-button" /></Link>
                </div>

                <img src={teachersImg} alt="img of teacher cartoon style" />
                    <h1 id="teachers-header">Teachers</h1>
                        <div id='teacher-button-div'>
                            <button onClick={setButtonAfterClick3} className={buttonClass3} id='teacher-log-in-button'>LOG IN</button>
                            <button onClick={setButtonAfterClick4} className={buttonClass4} id='teacher-sign-up-button'>SIGN UP</button>
                        </div>
                                { /* two teacher forms, sign up and log in, changed with useState */}
                            <form id={teacherForm} method='post' autoComplete='on'>
                                <input class='text-fields' type='text' id='fname-teacher' name='fname' placeholder='Full Name' required autoComplete='on'/> <br />
                                <input class='text-fields' type='email' id='email-teacher' name='email' placeholder='Email Address' required autoComplete='on'/> <br />
                                <input class='text-fields' type='password' id='password-teacher' name='password' placeholder='Password (8 characters minimum)' minLength='8' required /> <br />
                                <input class='text-fields' type='password' id='confirmPassword-teacher' name='confirmPassword' placeholder='Confirm Password' required />
                                <input type='submit' value='SIGN UP' id='SIGN-UP'/>
                            </form>
                            <form id={teacherForm1} method="post">
                            <input class='text-fields' type='email' id='email' name='email' placeholder='Email Address' required autoComplete='on'/> <br />
                            <input class='text-fields' type='password' id='password' name='password' placeholder='Password' required /> <br />
                            <input type='submit' value='SIGN IN' id='SIGN-UP'/>
                </form>
            </div>

        </div>
        </>
    ) 
    
}