import './Fonts.css';
import StarImage from './images/Star-only-copy.png'
import { useState } from 'react';

export default function ExplanationsOfProject() {

    // useState - changing the state of the content in the div

    const [section, setSection] = useState("main-content-of-div-2")
    const [section2, setSection2] = useState("main-content-of-div2")
    const [section3, setSection3] = useState("main-content-of-div3")
    const [section4, setSection4] = useState("main-content-of-div4")

    // useState - changing the state of the buttons onClick

    const [button, setButton] = useState("explanation-btn-01")
    const [button2, setButton2] = useState("explanation-btn-02")
    const [button3, setButton3] = useState("explanation-btn-03")
    const [button4, setButton4] = useState("explanation-btn-04")

    const ButtonOne = () => {
        setButton("explanation-btn-01-2")
        setButton2("explanation-btn-02")
        setButton3("explanation-btn-03")
        setButton4("explanation-btn-04")
        setSection("main-content-of-div-2")
        setSection2("main-content-of-div2")
        setSection3("main-content-of-div3")
        setSection4("main-content-of-div4")
    }
    
    const ButtonTwo = () => {
        setButton("explanation-btn-01")
        setButton2("explanation-btn-02-2")
        setButton3("explanation-btn-03")
        setButton4("explanation-btn-04")
        setSection("main-content-of-div")
        setSection2("main-content-of-div2-2")
        setSection3("main-content-of-div3")
        setSection4("main-content-of-div4")
        console.log('content of div changed to digital technologies')
    }
    
    const ButtonThree = () => {
        setButton("explanation-btn-01")
        setButton2("explanation-btn-02")
        setButton3("explanation-btn-03-2")
        setButton4("explanation-btn-04")
        setSection("main-content-of-div")
        setSection2("main-content-of-div2")
        setSection3("main-content-of-div3-2")
        setSection4("main-content-of-div4")
        console.log('content of section changed to key competencies')
    }
    
    const ButtonFour = () => {
        setButton("explanation-btn-01")
        setButton2("explanation-btn-02")
        setButton3("explanation-btn-03")
        setButton4("explanation-btn-04-2")
        setSection("main-content-of-div")
        setSection2("main-content-of-div2")
        setSection3("main-content-of-div3")
        setSection4("main-content-of-div4-2")
        console.log('content of section changed to key competencies')
    }
   
    
    

    return(
        <div className="explanations-of-the-project-div">
            <h1>How our programme helps teachers and schools</h1>
            <div id='four-buttons-for-explanation-section'>
                <button onClick={ButtonOne} id={button}><div id='btn-div-1'>LEARNING PATHWAYS</div></button>
                <button onClick={ButtonTwo}id={button2}><div id='btn-div-2'>DIGITAL TECHNOLOGIES</div></button>
                <button onClick={ButtonThree}id={button3}><div id='btn-div-3'>KEY COMPETENCIES</div></button>
                <button onClick={ButtonFour}id={button4}><div id='btn-div-4'>IR4.0</div></button>
            </div>
            
            
            
               
               
            <div id='bkgrnd-color'>
               
               
                <div id={section}>
                        
                        <div className='star-images'>
                            <img className='star-image' src={StarImage} alt='star' />
                            <img className='star-image' src={StarImage} alt='star' />
                            <img className='star-image' src={StarImage} alt='star' />
                            <img className='star-image' src={StarImage} alt='star' />
                            <img className='star-image' src={StarImage} alt='star' />
                        </div>
                                 <div className='content-true'>
                                        <h2 className='header'>Interlinking Pathways</h2>
                                        <h3 className='header-two'>This programme gives us 5 important interlinking Learning Pathways.</h3>
                                        <h4 className='first-of-five-headers'>COMPUTATIONAL THINKING</h4>
                                        <p className='first-of-five-contents'>Within the programme the students are enabled to express problems and form solutions that will be designed so a computer can be used to create diverse and encapsulating applications.</p>
                                        <h4 className='second-of-five-headers'>DEVELOPING DIGITAL OUTCOMES</h4>
                                        <p className='second-of-five-contents'>This programme is designed to strengthen the outcomes of each students personally to form strong applications.</p>
                                        <h4 className='third-of-five-headers'>SELF-MANAGEMENT</h4>
                                        <p className='third-of-five-contents'>Students will be taught the ways of how outcomes are processed, thought about, and produced.</p>
                                        <h4 className='fourth-of-five-headers'>DEVELOP VISUAL AND SOCIAL COMMUNICATIONS</h4>
                                        <p className='fourth-of-five-contents'>Students will learn to design visually pleasing applications used to both keep the user aware of what is happening on the screen.</p>
                                        <h4 className='fifth-of-five-headers'>STRONG TECHNOLOGICAL PRACTICES</h4>
                                        <p className='fifth-of-five-contents'>The programme will show students the best practices to think and solve the problems brought on by using technology.</p>
                                 </div>
                </div>
                        
                        
                        
                <div id={section2}>
                                    
                                    <div className='star-images'>
                                        <img className='star-image' src={StarImage} alt='star' />
                                        <img className='star-image' src={StarImage} alt='star' />
                                        <img className='star-image' src={StarImage} alt='star' />
                                        <img className='star-image' src={StarImage} alt='star' />
                                        <img className='star-image' src={StarImage} alt='star' />
                                    </div>
                                            <div className='content-true'>
                                                    <h2 className='header'>Expands Digital Knowledge Base</h2>
                                                    <h3 className='header-two'>This programme gives you the 5 major capabilities to be confident in Digital Technologies.</h3>
                                                    <h4 className='first-of-five-headers'>PROBLEM SOLVING </h4>
                                                    <p className='first-of-five-contents'>The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology.</p>
                                                    <h4 className='second-of-five-headers'>DECISION-MAKING </h4>
                                                    <p className='second-of-five-contents'>The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications.</p>
                                                    <h4 className='third-of-five-headers'>CONFIDENCE</h4>
                                                    <p className='third-of-five-contents'>When having the skills to manipulate the applications and learning to use it brings self-confidence into your life. </p>
                                                    <h4 className='fourth-of-five-headers'>HIGHER SELF-EXPECTATIONS</h4>
                                                    <p className='fourth-of-five-contents'>This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults.</p>
                                                    <h4 className='fifth-of-five-headers'>COHERENCE</h4>
                                                    <p className='fifth-of-five-contents'>This programme offers all students a broader education that makes links within and across learning areas.</p>
                                            </div>
                                     </div>
                


                              <div id={section3}>
                                        <div className='star-images'>
                                            <img className='star-image' src={StarImage} alt='star' />
                                            <img className='star-image' src={StarImage} alt='star' />
                                            <img className='star-image' src={StarImage} alt='star' />
                                            <img className='star-image' src={StarImage} alt='star' />
                                            <img className='star-image' src={StarImage} alt='star' />
                                        </div>
                                                <div className='content-true'>
                                                            <h2 className='header'>Enhance Key Competencies</h2>
                                                            <h3 className='header-two'>The programme enhances capabilities of students in the 5 key Competencies identified in the New Zealand Curriculum:</h3>
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




                                <div id={section4}>
                                        
                                        <div className='star-images'>
                                            <img className='star-image' src={StarImage} alt='star' />
                                            <img className='star-image' src={StarImage} alt='star' />
                                            <img className='star-image' src={StarImage} alt='star' />
                                            <img className='star-image' src={StarImage} alt='star' />
                                            <img className='star-image' src={StarImage} alt='star' />
                                        </div>
                                                <div className='content-true'>
                                                        <h2 className='header'>IR4.0</h2>
                                                        <h3 className='header-two'>Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in the Fourth Industrial Revolution. (IR4.0)</h3>
                                                        <h4 className='first-of-five-headers'>LEARNING TO LEARN</h4>
                                                        <p className='first-of-five-contents'>The programme will set challenges at the end of every project to encourage students to explore and learn how to learn.</p>
                                                        <h4 className='second-of-five-headers'>COMMUNITY ENGAGEMENT</h4>
                                                        <p className='second-of-five-contents'>The programme encourages students to be involved in the communities, such as family, friends, and in school, to contribute and make connections with other people.</p>
                                                        <h4 className='third-of-five-headers'>CULTURAL DIVERSITY </h4>
                                                        <p className='third-of-five-contents'>This programme is designed in New Zealand and reflects NZ's cultural diversity.</p>
                                                        <h4 className='fourth-of-five-headers'>INCLUSION </h4>
                                                        <p className='fourth-of-five-contents'>In particular the programme is designed with acknowledgement to the student's identities and talents, allowing them to be creative to their personal ability.</p>
                                                        <h4 className='fifth-of-five-headers'>FUTURE FOCUS </h4>
                                                        <p className='fifth-of-five-contents'>The programme leads students to explore future themes such as artificial intelligence and augmented reality.</p>
                                                </div>
                                        </div>
                                        
                        
                        

        </div>
        </div>

    )
}
