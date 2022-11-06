import React from "react";
import "./StudentCard.css";
import image from "./images/RawiriFletcher.png";
export default function StudentCard() {
  return (
    <div className="Std-container">
      <div className="class1">
        <div className="std_image">
          <br /> <img src={image} alt=""></img>
        </div>
        <br />
        <button className="edit_button">Edit Profile</button>
        <br />
        <br />
        <button className="changePhoto_btn">Change Photo</button>
      </div>

      <div className="class2">
        <div className="ProfileViewer_header">Rawiri Fletcher</div>
        <br />
        <br />
        <div className="space-btw">
          <div className="left">School</div>
          <div className="right">
            <b>Homai School</b>
          </div>
          <div className="left">Teacher </div>
          <div className="right">
            <b>Jasmina Salvador</b>
          </div>
          <div className="left">Course</div>
          <div className="right">
            <b>Beginner</b>
          </div>
          <div className="left">Date of birth </div>{" "}
          <div className="right">
            {" "}
            <b>25 June 2010 </b>
          </div>
          <div className="left">Contect No</div>{" "}
          <div className="right">
            {" "}
            <b> 022 333 4444</b>{" "}
          </div>
          <div className="left">Email id </div>{" "}
          <div className="right">
            <b>fletcher@gmail.com </b>
          </div>
        </div>
      </div>
    </div>
  );
}
