import Nav from './Navigation-bar';
import Footer from './Footer';
import SideBar from './Side-bar';
import Button from './Button';
import './Project.css';
import img1 from './React_imgs/img1.png';
import img2 from './React_imgs/img2.png';
import img3 from './React_imgs/img3.png';
import img4 from './React_imgs/img4.png';
import img5 from './React_imgs/img5.png';
import img6 from './React_imgs/img6.png';
import img7 from './React_imgs/img7.png';
import img8 from './React_imgs/img8.png';
import img9 from './React_imgs/img9.png';
import img10 from './React_imgs/img10.png';
import img11 from './React_imgs/img11.png';
import img12 from './React_imgs/img12.png';
import img13 from './React_imgs/img13.png';
import img14 from './React_imgs/img14.png';
import img15 from './React_imgs/img15.png';
import BackButton from './BackButton';

function App() {
    return (
        <div style={{ backgroundColor: "white" }} >
            <div>
                <Nav>This is Navigation bar</Nav>

                <h1 style={{ textAlign: "center" }}>
                    PROJECTS
                </h1>
                <p style={{ textAlign: "center" }}>
                    <b> Welcome to the project library.You can use the Filter on the right to help you search for specific projects.</b>
                </p>

                <Button></Button>
                <hr/>
            </div>

            <div className='container'>
                <div className="Side_bar" style={{ backgroundColor: "white" }}>
                    <SideBar className="Side_bar">

                    </SideBar>
                </div>
              
                <div className="Images">
                   <div> 
                        <img src={img1} alt="prj1"></img>
                        <p><b>Introduction</b><br/>BEGINNER | Animation</p> 
                   </div>

                   <div> <img src={img2} alt="prj2"></img>
                    <p><b>My Birthday</b><br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img3} alt="prj3"></img>
                    <p><b>10 Block Challenge</b><br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img4} alt="prj4"></img>
                    <p><b>Build A Band</b><br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img5} alt="prj5"></img>
                    <p><b>The Bear And The Monkey</b><br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img6} alt="prj6"></img>
                    <p><b>Debugging</b><br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img7} alt="prj7"></img>
                    <p><b>About Me</b><br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img8} alt="prj8"></img>
                    <p><b>I Am Here!</b><br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img9} alt="prj9"></img>
                    <p><b>Funny Faces</b><br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img10} alt="prj10"></img>
                    <p><b>It Tickels!</b><br/>BEGINNER | Animation</p> </div>

                    <div> <img src={img11} alt="prj11"></img>
                    <p><b>Penguine In A Desert</b><br/>BEGINNER | Animation</p> </div>

                    <div>  <img src={img12} alt="prj12"></img>
                    <p><b>Time Travel</b><br/>BEGINNER | Animation</p></div> 

                    <div> <img src={img13} alt="prj13"></img>
                    <p><b>Birthday Card</b><br/>BEGINNER | Animation</p> </div>

                    <div>  <img src={img14} alt="prj14"></img>
                    <p><b>The Lion and The Mouse Part 1</b><br/>BEGINNER | Animation</p> </div>

                    <div> <img src={img15} alt="prj15"></img>
                    <p><b>The Lion and The Mouse Part 2</b><br/>BEGINNER | Animation</p> </div>

                </div>
            </div>
            <hr/>
            <div ><BackButton/></div>
            <br/>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
