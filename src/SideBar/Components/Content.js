import React, { useState } from "react";
import "./Content.css";
import pic from "../Images/Ellipse 38.png";
import Progress from "../Images/Progress light.png";
import user from "../Images/user.png";
import submit from "../Images/submit .png";
import library from "../Images/library.png";
import usercircle from "../Images/user-circle.png";
import settingcog from "../Images/Icon-settings.png";
import logout from "../Images/logout.png";

function Content() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="content">
      <div className={isActive ? "profile" : "closed"}>
        <img src={pic} alt={"Profile Pic"} className="image" />
        <ul>
          <li>
            <img src={Progress} alt={"Progress Icon"} />
            <p>Progress Tracker</p>
          </li>
          <li>
            <img src={user} alt={"Progress Icon"} />
            <p>Student Profile</p>
          </li>
          <li>
            <img src={submit} alt={"Progress Icon"} />
            <p>Project Submissions</p>
          </li>
          <li>
            <img src={library} alt={"Progress Icon"} />
            <p> Project Library</p>
          </li>
        </ul>

        <div className="leftbtn" onClick={toggleClass}></div>

        <div className={isActive ? "setting" : "hide"}>
          <div className="logout">
            <img src={usercircle} alt={"Progress Icon"} />
            <p>Profile</p>
          </div>
          <div className="logout">
            <img src={settingcog} alt={"Progress Icon"} />
            <p>Settings</p>
          </div>
          <div className="logout">
            <img src={logout} alt={"Progress Icon"} />
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
