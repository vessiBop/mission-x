import SideBar from "./Project-pageComponents/Side-bar";
//import Button from './Project-pageComponents/Button';
import Navbar from "./Homepage-Components/Navbar";
import Footer from "./Homepage-Components/Footer";
import "./StudentsProjectPage.css";
import BackButton from "./Project-pageComponents/BackButton";
import { useEffect, useState } from "react";
//import { response } from 'express';
import "./Project-pageComponents/Button.css";
function StudentsProjectPage() {
  const [projects, setProjects] = useState([]); // fetching data from backend
  const [course, setCourse] = useState("Beginner");
  const [subscriptionType, setSubscriptionType] = useState("Free");

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      subscriptionType: subscriptionType,
      course: course,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:4004/projects", requestOptions)
      .then((response) => response.json())
      .then((result) => setProjects(result))
      .catch((error) => console.log("error", error));
  }, [course, subscriptionType]);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="ProjectPage_main">
        <br />
        <div>
          <h1>PROJECTS</h1>
          <p style={{ textAlign: "center" }}>
            Welcome to the project library.You can use the Filter on the right
            to help you search for specific projects.
          </p>
          <br />

          <div className="Button_Container">
            <div>
              <button onClick={() => setCourse("Beginner")}>BEGINNER</button>
              <button onClick={() => setCourse("Intermediate")}>
                INTERMEDIATE
              </button>
              <button onClick={() => setCourse("Advanced")}>ADVANCED</button>
            </div>
            <div>
              SHOW <button>5</button>
              <button>10</button>
              <button>15</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="ProjectPage_Side_bar"
            style={{ backgroundColor: "white" }}
          >
            <SideBar></SideBar>
          </div>
          <div className="Project_Images">
            {projects.map((project) => (
              <div>
                <img src={project.profile_pic} alt="prj1"></img>
                <p>
                  {project.name}
                  <br />
                  BEGINNER | Animation
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <BackButton />
        </div>
        <br />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default StudentsProjectPage;
