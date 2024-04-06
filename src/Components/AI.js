import React from "react";
import "../CSS/AI.css"; 

function AI() { 
  return (
    <div className="ai-container"> 
      <h1 className="ai-title">AI Developers Club</h1>
      <div className="ai-content"> 
        <div className="ai-text">
          <p style={{ fontSize: "1.8rem", color:"#471486 "}}>
            Welcome to the AI Developers Club! As first-year AI engineering students, our focus is on researching and exploring various AI tools and methodologies. We delve into understanding the creation and application of AI technologies, learning how they're developed and utilized in real-world scenarios. Through collaborative efforts, we aim to deepen our knowledge of AI and foster innovation within the field. Join us as we embark on this exciting journey of discovery and learning in the realm of artificial intelligence. Click the button below to find out more about us!
          </p>
          <button className="ai-button">Learn more</button>
        </div>
      </div>
      <footer className="ai-footer"> 
        &copy; Copyright © UMT 
      </footer>
    </div>
  );
}

export default AI;
