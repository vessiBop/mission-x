import Nav from './components/Navigation-bar';
import Footer from './components/Footer';
import SideBar from './components/Side-bar';
import Button from './components/Buttons';
import img1 from './React_imgs/img1.png';
import img2 from './React_imgs/img2.png';


function App() {
    return (
        <div style={{ backgroundColor: "gray" }} >
            <div>
                <Nav>This is Navigation bar</Nav>

                <h1 style={{ textAlign: "center" }}>
                    PROJECTS
                </h1>
                <p style={{ textAlign: "center" }}>
                    <b> Welcome to the project library.You can use the Filter on the right to help you search for specific projects.</b>
                </p>

                <Button className="Button"></Button>
            </div>

            <div className='container'>
                <div className="Side_bar" style={{ backgroundColor: "Skyblue" }}>
                    <SideBar class="Side_bar">

                    </SideBar>
                </div>
                <div className="Images">
                    <img src={img1} alt="prj1"></img>
                    <img src={img2} alt="prj2"></img>
                </div>
            </div>
        </div>
    );
}

export default App;
