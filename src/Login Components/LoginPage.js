import teachersImg from './LoginPageImages/teacher.png';
import studentsImg from './LoginPageImages/Students.png';
import { useState } from 'react'
import './LoginPage.css';
import './Login.css';
import LeftCross from './LoginPageImages/Line-4.png'
import RightCross from './LoginPageImages/Line-5.png'
import { Link } from 'react-router-dom'; 
import axios from 'axios';

export default function LoginPage() {

// useState function for setting the input for form & api
const initialState = { name: '', email: '', password: '' }
const [user, setUser] = useState(initialState);

function handleChange (e) {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })  
    console.log(user)
}
const rootUrlSignUpStudent = 'http://localhost:4000/authentication/signup-student';
const rootUrlSignUpTeacher = 'http://localhost:4000/authentication/teacher-signup';

function handleSubmit (e) {
    e.preventDefault()

    axios.post(rootUrlSignUpStudent, user)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    }

    function handleTeacherSubmit (e) {
        e.preventDefault()

        axios.post(rootUrlSignUpTeacher, user)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        }

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


// functions for changing the buttons on the teacher and the student side separately

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

// returning the html for the login page forms
    return (
        <>
        <div id='login-parent-container'>
            <div id="left-side-login-container">
                <img src={studentsImg} alt="img of student cartoon style" />
                <h1 id="students-signup-header">Students</h1>
                <div id='student-button-div'>    
                    <button onClick={setButtonAfterClick1} className={buttonClass} id='student-log-in-button'>LOG IN</button>
                    <button onClick={setButtonAfterClick2} className={buttonClass2} id='student-sign-up-button'>SIGN UP</button>
                </div>
                <form id={studentForm} method="post"> {/* two student forms one is sign up one is log in. changed with useState */}
                    <input className='text-fields' type='text' id='name' name='name' placeholder='Full Name' required onChange={handleChange}/> <br />
                    <input className='text-fields' type='email' id='email' name='email' placeholder='Email Address' required onChange={handleChange}/> <br />
                    <input className='text-fields' type='password' id='password' name='password' placeholder='Password' required onChange={handleChange}/> <br />
                </form>
                    <button type='submit' value='SIGN UP' id='SIGN-UP' onClick={handleSubmit}>SIGN UP</button>
                <form id={studentForm1} method="GET">
                    <input className='text-fields' type='email' id='email' name='email' placeholder='Email Address' required autoComplete='on'/> <br />
                    <input className='text-fields' type='password' id='password' name='password' placeholder='Password' required /> <br />
                    <button type='submit' value='SIGN IN' id='SIGN-IN'>SIGN IN</button>
                </form>

            </div>
            <div id="right-side-login-container">
                <div id='exit-button-div'>
                {/* this part is an exit button that links back to the home page */}
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
                            <form id={teacherForm} method='POST' autoComplete='on'>
                                <input className='text-fields' type='text' id='fname-teacher' name='name' placeholder='Full Name' required autoComplete='on' onChange={handleChange}/> <br />
                                <input className='text-fields' type='email' id='email-teacher' name='email' placeholder='Email Address' required autoComplete='on' onChange={handleChange}/> <br />
                                <input className='text-fields' type='password' id='password-teacher' name='password' placeholder='Password' required onChange={handleChange}/> <br />
                            </form>
                            <button type='submit' value='SIGN UP' id='SIGN-UP' onClick={handleTeacherSubmit}>SIGN UP</button>
                            <form id={teacherForm1} method="GET">
                            <input className='text-fields' type='email' id='email' name='email' placeholder='Email Address' required autoComplete='on'/> <br />
                            <input className='text-fields' type='password' id='password' name='password' placeholder='Password' required /> <br />
                            <input type='submit' value='SIGN IN' id='SIGN-UP'/>
                </form>
            </div>

        </div>
        </>
    ) 
    
}