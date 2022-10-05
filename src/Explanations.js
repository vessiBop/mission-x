import './Fonts.css';
import StarImage from './images/Star-only-copy.png'
import { useState } from 'react';

export default function ExplanationsOfProject() {
    const [section, setSection] = useState("main-content-of-div")
    // const [section2, setSection2] = useState("main-content-of-div2")
    // const [section3, setSection3] = useState("main-content-of-div3")
    // const [section4, setSection4] = useState("main-content-of-div4")
    

    const changingToLearningPathwaysContent = () => {
        setSection("main-content-of-div")
        console.log('content of section changed')
    }


    return(
        <div className="explanations-of-the-project-div">
            <h1>How our programme helps teachers and schools</h1>
            <div id='four-buttons-for-explanation-section'>
                <button onClick={changingToLearningPathwaysContent} id='explanation-btn-01'>LEARNING PATHWAYS</button>
                <button id='explanation-btn-02'>DIGITAL TECHNOLOGIES</button>
                <button id='explanation-btn-03'>KEY COMPETENCIES</button>
                <button id='explanation-btn-04'>IR4.0</button>
            </div>
            <div id='bkgrnd-color'>
            <div id={section}>
                <h2 id='header'>Enhance Key Competencies</h2>
                <h3 id='header-two'>The programme enhances capabilities of students in the 5 key Competencies identified in the New Zealand Curriculum:</h3>
                <div id='star-images'>
                    <img className='star-image' src={StarImage} alt='star' />
                    <img className='star-image' src={StarImage} alt='star' />
                    <img className='star-image' src={StarImage} alt='star' />
                    <img className='star-image' src={StarImage} alt='star' />
                    <img className='star-image' src={StarImage} alt='star' />
                </div>
                <div id='content-true'>
                    <h4 className='first-of-five-headers'>THINKING</h4>
                    <p className='first-of-five-contents'>In particular the programme focused on problem solving, design thinking and computational thinking.</p>
                    <h4 className='second-of-five-headers'>DISCERNING CODES</h4>
                    <p className='second-of-five-contents'>Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.  </p>
                    <h4 className='third-of-five-headers'>SELF-MANAGEMENT</h4>
                    <p className='third-of-five-contents'>Projects and challenges are designed to motivate students to explore and experiment with self-motivation.</p>
                    <h4 className='fourth-of-five-headers'>RELATIONSIPS WITH PEERS</h4>
                    <p className='fourth-of-five-contents'>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.</p>
                    <h4 className='fifth-of-five-headers'>PARTICIPATION AND COLLABORATION</h4>
                    <p className='fifth-of-five-contents'>The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people.</p>
                </div>

            </div>
            </div>
        </div>

    )
}
