import React from "react";
import "../CSS/WebDev.css";
import webDevImage1 from "../Data/img/web1.jpeg";
import webDevImage2 from "../Data/img/web2.jpg";
import webDevImage3 from "../Data/img/web3.jpeg";
import lajmetImage from "../Data/img/lajmet.jpeg";
import im1Image from "../Data/img/im1.jpeg";
import im2Image from "../Data/img/im2.jpeg";
import im3Image from "../Data/img/im3.jpeg";

function WebDev() {
  return (
    <div className="web-dev-container">
      <h1 className="web-dev-title">Web Development Club</h1>
      <div className="web-dev-content">
        <div className="web-dev-text">
          <h2 style={{ fontSize: "2rem", color: "#103741" }}>Learn the Fundamentals</h2>
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
            The Web Development Club is composed of students interested in the
            Web Programming and Development program. We are currently exploring
            projects to expand students’ skills gained from within the program.
          </p>
        </div>
        <div className="web-dev-image-container">
          <img
            src={webDevImage1}
            alt="Web1"
            className="web-dev-image1"
            style={{ width: "100%", height: "auto", marginBottom: "20px" }}
          />
        </div>
      </div>
      <div className="web-dev-content">
        <div className="web-dev-image-container">
          <img
            src={webDevImage2}
            alt="Web2"
            className="web-dev-image2"
            style={{ width: "100%", height: "auto", marginBottom: "20px" }}
          />
        </div>
        <div className="web-dev-text">
          <h2 style={{ fontSize: "2rem", color: "#103741" }}>Master Key Programming Languages</h2>
          <p style={{ fontSize: "1.5rem", color:"#471486 " }}>
            Join our Web Development Club and dive into the world of coding,
            design, and innovation! From HTML basics to advanced JavaScript
            techniques, we provide a supportive environment for beginners and
            experienced developers alike to collaborate, learn, and create
            stunning websites together. Expand your skill set, network with
            like-minded individuals, and embark on an exciting journey into the
            ever-evolving field of web development with us!
          </p>
        </div>
      </div>
      <div className="web-dev-content">
        <div className="web-dev-text">
          <h2 style={{ fontSize: "2rem", color: "#103741" }}>Hone Your Skills</h2>
          <p style={{ fontSize: "1.7rem", color:"#471486 " }}>
            In our Web Development Club, we focus on mastering key programming
            languages essential for creating dynamic and interactive websites:
          </p>
          <ol>
            <li>
              HTML (Hypertext Markup Language): The backbone of web development,
              HTML provides the structure and content of web pages.
            </li>
            <li>
              CSS (Cascading Style Sheets): CSS brings style and visual appeal to
              web pages by controlling layout, typography, colors, and more.
            </li>
            <li>
              JavaScript: As a powerful scripting language, JavaScript adds
              interactivity and dynamic features to websites, enabling functions
              like form validation, animations, and event handling.
            </li>
          </ol>
        </div>
        <div className="web-dev-image-container">
          <img
            src={webDevImage3}
            alt="Web3"
            className="web-dev-image3"
            style={{ width: "100%", height: "auto", marginBottom: "20px" }}
          />
        </div>
      </div>
      <div className="web-dev-content">
        <div className="web-dev-image-container">
          <img
            src={im2Image}
            alt="Im2"
            className="web-dev-image6"
            style={{ width: "300px", height: "300px", marginBottom: "20px" }}
          />
        </div>
        <div className="web-dev-image-container">
          <img
            src={lajmetImage}
            alt="Lajmet"
            className="web-dev-image4"
            style={{ width: "300px", height: "300px", marginBottom: "20px" }}
          />
        </div>
        <div className="web-dev-image-container">
          <img
            src={im1Image}
            alt="Im1"
            className="web-dev-image5"
            style={{ width: "300px", height: "300px", marginBottom: "20px" }}
          />
        </div>
        <div className="web-dev-image-container">
          <img
            src={im3Image}
            alt="Im3"
            className="web-dev-image7"
            style={{ width: "300px", height: "300px", marginBottom: "20px" }}
          />
        </div>
      </div>
      <footer className="web-dev-footer">
        Copyright © UMT
      </footer>
    </div>
  );
}

export default WebDev;