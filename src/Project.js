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
            </div>

            <div className='container'>
                <div className="Side_bar" style={{ backgroundColor: "white" }}>
                    <SideBar className="Side_bar">

                    </SideBar>
                </div>
                <div className="Images">
                    <img src={img1} alt="prj1"></img>

                    <img src={img2} alt="prj2"></img>
                    <img src={img3} alt="prj3"></img>

                    <img src={img4} alt="prj4"></img>

                    <img src={img5} alt="prj5"></img>

                    <img src={img6} alt="prj6"></img>
                    <img src={img7} alt="prj7"></img>
                    <img src={img8} alt="prj8"></img>
                    <img src={img9} alt="prj9"></img>
                    <img src={img10} alt="prj10"></img>
                    <img src={img11} alt="prj11"></img>
                    <img src={img12} alt="prj12"></img>
                    <img src={img13} alt="prj13"></img>
                    <img src={img14} alt="prj14"></img>
                    <img src={img15} alt="prj15"></img>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
