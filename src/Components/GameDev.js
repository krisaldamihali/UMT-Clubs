import React from "react";
import "../CSS/GameDev.css"; 
import gameDevImage1 from "../Data/img/game1.jpeg"; 
import gameDevImage2 from "../Data/img/game2.jpeg";
import gameDevImage3 from "../Data/img/game3.jpeg";

function GameDev() { 
  return (
    <div className="game-dev-container"> 
      <h1 className="game-dev-title">Game Development Club</h1>
      <div className="game-dev-content"> 
        <div className="game-dev-text">
          <h2>Learn the Fundamentals</h2>
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
          
          </p>
        </div>
        <div className="game-dev-image-container">
          <img src={gameDevImage1} alt="Game1" className="game-dev-image1" /> 
        </div>
      </div>
      <div className="game-dev-content"> 
        <div className="game-dev-image-container">
          <img src={gameDevImage2} alt="Game2" className="game-dev-image2" /> 
        </div>
        <div className="game-dev-text">
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
          
          </p>
        </div>
      </div>
      <div className="game-dev-content"> 
        <div className="game-dev-text">
          <h2>Hone Your Skills</h2>
          <p style={{ fontSize: "1.7rem", color:"#471486 "}}>
          </p>
        </div>
        <div className="game-dev-image-container larger-image">
          <img src={gameDevImage3} alt="Game3" className="game-dev-image3" /> 
        </div>
      </div>
      <footer className="game-dev-footer"> 
        &copy; Copyright © UMT 
      </footer>
    </div>
  );
}

export default GameDev;
