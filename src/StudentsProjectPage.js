import SideBar from "./Project-pageComponents/Side-bar";
import Navbar from "./Homepage-Components/Navbar";
import Footer from "./Homepage-Components/Footer";
import "./StudentsProjectPage.css";
import BackButton from "./Project-pageComponents/BackButton";
import { useEffect, useState } from "react";
import "./Project-pageComponents/ProjectPageButton.css";
function StudentsProjectPage() {
  const [projects, setProjects] = useState([]); // fetching data from backend
  const [course, setCourse] = useState("Beginner");
  const [subscriptionType, setSubscriptionType] = useState("Free"); // use 'useState' hook to call different projects comes after choosing different options.

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); // declare headers

    const raw = JSON.stringify({
      subscriptionType: subscriptionType,
      course: course, // define body parameters to give functionality to different buttons.
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:4004/projects", requestOptions) // finally call API and fetch database to show on  front-end.
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
              <button
                className="Project-Button"
                onClick={() => setCourse("Beginner")}
              >
                BEGINNER
              </button>
              <button
                className="Project-Button"
                onClick={() => setCourse("Intermediate")}
              >
                INTERMEDIATE
              </button>
              <button
                className="Project-Button"
                onClick={() => setCourse("Advanced")}
              >
                ADVANCED
              </button>
            </div>
            <div>
              SHOW <button className="Project-Button">5</button>
              <button className="Project-Button">10</button>
              <button className="Project-Button">15</button>
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
