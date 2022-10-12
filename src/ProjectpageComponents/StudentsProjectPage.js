import SideBar from './Side-bar';
import Button from './Button';
import './StudentsProjectPage.css';
import Navigationbar from './Std-Navigationbar';
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
import ProjectPageFooter from './ProjectPageFooter';

function StudentsProjectPage() {
    return (
        <div className='main'>
        <div>  
            <Navigationbar></Navigationbar>
        </div>
        <div>
            <br/>
            <div>
                

                <h1>
                    PROJECTS
                </h1>
                <p style={{ textAlign: "center" }}>
                   Welcome to the project library.You can use the Filter on the right to help you search for specific projects.
                </p>
                <br/>

                <Button></Button>
            
            </div>

            <div className='container'>
                <div className="Side_bar" style={{ backgroundColor: "white" }}>
                    
                    <SideBar>

                    </SideBar>
                </div>
              
                <div className="Images">
                   <div> 
                        <img src={img1} alt="prj1"></img>
                        <p>Introduction<br/>BEGINNER | Animation</p> 
                   </div>

                   <div> <img src={img2} alt="prj2"></img>
                    <p>My Birthday<br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img3} alt="prj3"></img>
                    <p>10 Block Challenge<br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img4} alt="prj4"></img>
                    <p>Build A Band<br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img5} alt="prj5"></img>
                    <p>The Bear And The Monkey<br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img6} alt="prj6"></img>
                    <p>Debugging<br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img7} alt="prj7"></img>
                    <p>About Me<br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img8} alt="prj8"></img>
                    <p>I Am Here!<br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img9} alt="prj9"></img>
                    <p>Funny Faces<br/>BEGINNER | Animation</p> </div>

                   <div> <img src={img10} alt="prj10"></img>
                    <p>It Tickels!<br/>BEGINNER | Animation</p> </div>

                    <div> <img src={img11} alt="prj11"></img>
                    <p>Penguine In A Desert<br/>BEGINNER | Animation</p> </div>

                    <div>  <img src={img12} alt="prj12"></img>
                    <p>Time Travel<br/>BEGINNER | Animation</p></div> 

                    <div> <img src={img13} alt="prj13"></img>
                    <p>Birthday Card<br/>BEGINNER | Animation</p> </div>

                    <div>  <img src={img14} alt="prj14"></img>
                    <p>The Lion and The Mouse Part 1<br/>BEGINNER | Animation</p> </div>

                    <div> <img src={img15} alt="prj15"></img>
                    <p>The Lion and The Mouse Part 2<br/>BEGINNER | Animation</p> </div>

                </div>
                
            </div>
            <div ><BackButton/></div>
            <br/>
           <ProjectPageFooter></ProjectPageFooter>
           </div>
          
        </div>
    );
}

export default StudentsProjectPage;
