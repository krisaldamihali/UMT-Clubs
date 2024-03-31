import React from "react";
import "../CSS/AppDev.css"; 
import appDevImage1 from "../Data/img/app1.png"; 
import appDevImage2 from "../Data/img/app2.jpeg";
import appDevImage3 from "../Data/img/app3.webp";

function AppDev() { 
  return (
    <div className="app-dev-container"> 
      <h1 className="app-dev-title">Mobile Development Club</h1>
      <div className="app-dev-content"> 
        <div className="app-dev-text">
          <h2>Learn the Fundamentals</h2>
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
          This is one of the few tech-oriented clubs in Metropolitan University of Tirana. It is focused on learning the art of mobile application development. The main objective of this club is to introduce its members to the main technologies used for this activity and to lay a decent foundation for them to expand their knowledge on their own.
          </p>
        </div>
        <div className="app-dev-image-container">
          <img src={appDevImage1} alt="App1" className="app-dev-image1" /> 
        </div>
      </div>
      <div className="app-dev-content"> 
        <div className="app-dev-image-container">
          <img src={appDevImage2} alt="App2" className="app-dev-image2" /> 
        </div>
        <div className="app-dev-text">
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
          On a normal club day, the mentors either teach new concepts or write/analyze code. This way of operation ensures that students not only learn the theoretical knowledge, but are shown a way how to apply it in real-life scenarios. 
          </p>
        </div>
      </div>
      <div className="app-dev-content"> 
        <div className="app-dev-text">
          <h2>Hone Your Skills</h2>
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
          This club is made entirely of students, so there is a welcoming air whenever we meet-up. We also can invite professors to explain harder topics so we have a more smooth journey.
            At our club, we've devoting our time in building a track time counter & leaderboard app in order to help our friends at the Sports Club to find out who is faster among them.
          </p>
        </div>
        <div className="app-dev-image-container larger-image">
          <img src={appDevImage3} alt="App3" className="app-dev-image3" /> 
        </div>
      </div>
      <footer className="app-dev-footer"> 
        &copy; Copyright © UMT 
      </footer>
    </div>
  );
}

export default AppDev;
