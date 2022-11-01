import SideBar from './Project-pageComponents/Side-bar';
import Button from './Project-pageComponents/Button';
import Navbar from './Homepage-Components/Navbar';
import Footer from './Homepage-Components/Footer';
import './StudentsProjectPage.css';
import BackButton from './Project-pageComponents/BackButton';
import { useEffect, useState } from 'react';

function StudentsProjectPage() {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
          fetch("http://localhost:4004/free")
            .then(response => response.json())
            .then(result => setProjects(result))
            .catch(error => console.log('error', error));
    },[]);
   const filter ={
        subscription: 'premimum',
        course: 'intermediate',
    };
      fetch("http://localhost:4004/")
        .then(response => response.json())
        .then(result => setProjects(filter))
        .catch(error => console.log('error', error));
    return (
        <div >
        <div>  
           <Navbar></Navbar>
        </div>
        <div className='ProjectPage_main'>
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
                <div className="ProjectPage_Side_bar" style={{ backgroundColor: "white" }}>
                    
                    <SideBar>

                    </SideBar>
                </div>
              
                <div className="Project_Images">
                  {projects.map((project)=>(
                   <div> 
                        <img src={project.profile_pic} alt="prj1"></img>
                        <p>{project.name}<br/>BEGINNER | Animation</p> 
                   </div>))}

                  

                </div>
                
            </div>
            <div ><BackButton/></div>
            <br/>
            <Footer></Footer>
           </div>
          
        </div>
    );
}

export default StudentsProjectPage;
