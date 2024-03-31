import React from "react";
import "../CSS/GDSC.css";
import GDSCImage1 from "../Data/img/gdsc1.gif";
import GDSCImage2 from "../Data/img/gdsc2.png";
import GDSCImage3 from "../Data/img/gdsc3.jpeg";

function GDSC() {
  return (
    <div className="gdsc-container">
      <h1 className="gdsc-title">Google Developer Student Clubs</h1>
      <div className="gdsc-content">
        <div className="gdsc-text">
          <h2>Learn the Fundamentals</h2>
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
            GDSC often organizes training sessions and seminars that cover a variety of topics, such as Machine Learning, Web Development, and Mobile Application Development. These lectures are often interactive and focus on practical knowledge and skills.
          </p>
        </div>
        <div className="gdsc-image-container">
          <img src={GDSCImage1} alt="GDSC1" className="gdsc-image1" />
        </div>
      </div>
      <div className="gdsc-content">
        <div className="gdsc-image-container">
          <img src={GDSCImage2} alt="GDSC2" className="gdsc-image2" />
        </div>
        <div className="gdsc-text">
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
            These are interactive learning sessions that focus on specific technologies or platforms. Students in the club are guided by mentors or experienced members through exercises, coding labs, and guided lectures, and study jams provide an organized learning environment and promote knowledge sharing among peers.
          </p>
        </div>
      </div>
      <div className="gdsc-content">
        <div className="gdsc-text">
          <h2>Hone Your Skills</h2>
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
            GDSC often collaborates with other student organizations or educational institutions to cohost events and coordinate resources and increase their impact. These collaborations provide opportunities for cross-disciplinary learning and collaboration while broadening the scope of activities offered by GDSC.
          </p>
        </div>
        <div className="gdsc-image-container larger-image">
          <img src={GDSCImage3} alt="GDSC3" className="gdsc-image3" />
        </div>
      </div>
      <footer className="gdsc-footer">
        &copy; Copyright © UMT 
      </footer>
    </div>
  );
}

export default GDSC;