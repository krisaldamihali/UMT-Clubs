// WebDev.js
import React, { useState } from 'react';
import "../CSS/WebDev.css"; 


const WebDev = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const studentProjects = [
    {
      id: 1,
      name: "Krisalda Mihali, Bjorna Kastrati, Armela Ruci, Argjend Haldeda",
      title: "ALBVENTURE",
      description: "This fun and easy website helps you explore Albania in a new way. You can click on a map to find cool places, play a maze game, and learn about the culture with colorful pictures and simple menus. It’s a playful guide to everything Albania has to offer!",
      externalLink: "https://clubs.umt.edu.al/ALBVENTURE/index.html"
    },
    {
      id: 2,
      name: "Emanuela Fetau",
      title: "Card Memory Game",
      description: "A fun and challenging game where players flip cards to find matching pairs and test their memory skills.",
      externalLink: "https://clubs.umt.edu.al/Card memory/index.html"
    },
    {
      id: 3,
      name: "Arsen Hamzaj",
      title: "⚔️ Click Frenzy: The Legend of Reflexor ⚡",
      description: "A fast-paced action game that tests your reflexes and speed as you battle waves of enemies with rapid clicks to become the ultimate champion of Reflexor.",
      externalLink: "https://clubs.umt.edu.al/punaewebit/game.html"
    },
    {
      id: 4,
      name: "Bajram Haxhiu",
      title: "Tic Tac Toe",
      description: "A simple two-player game where Xs and Os compete to get three in a row on a 3×3 grid. Built with basic JavaScript logic and interactivity",
      externalLink: "https://clubs.umt.edu.al/TicTacToe/tic-tac-toe-web.html"
    },
    {
      id: 5,
      name: "Mateos Sharka",
      title: "Riddle Game",
      description: "A fun and interactive Albanian riddle game that challenges players to solve traditional riddles using logic and language skills.",
      externalLink: "https://clubs.umt.edu.al/riddle game/index.html"
    },
    {
      id: 6,
      name: "Mateo Ndreca , Rexhina Qahja, Nida Lami ",
      title: "Leave a review",
      description: "Leave us a review about Open Door Fest – we’d love to hear your thoughts and how you experienced this unique event!",
      externalLink: "https://clubs.umt.edu.al/UmtOpenNotes/index.html"
    },
    {
      id: 7,
      name: "Mateo Ndreca , Rexhina Qahja, Nida Lami ",
      title: "The Importance of CSS",
      description: "A website about The Importance of CSS highlights how CSS enhances web design by separating content from style, enabling responsive layouts, visual appeal, and a better user experience.",
      externalLink: "https://clubs.umt.edu.al/cssIMP/index.html"
    },
    {
      id: 8,
      name: "Marisa Bajo",
      title: "Lista e Trashëgimive të UNESCO-s në Shqipëri",
      description: "The UNESCO World Heritage List in Albania includes cultural and natural sites of outstanding importance that reflect the country's rich history, unique traditions, and natural beauty.",
      externalLink: "https://clubs.umt.edu.al/PROJECT/index.html"
    },
    {
      id: 9,
      name: "Megita Mema",
      title: "Typing speed test",
      description: "A typing speed test website that allows users to measure their typing speed and accuracy through various text passages.",
      externalLink: "https://clubs.umt.edu.al/Typing-Speed-Test/typing.html"
    },
    
  ];

  const showProject = (project) => {
    if (project.externalLink) {
      window.open(project.externalLink, "_blank"); 
    } else {
      setSelectedProject(project);
      setCurrentView('project');
    }
  };

  const navigateHome = () => {
    setCurrentView('home');
    setSelectedProject(null);
  };

  const HomeView = () => (
    <div className="container">
      <header className="header">
        <h1>Web Developers Club</h1>
      </header>

      <main className="main">
        <h2>Student Projects</h2>
        <div className="grid">
          {studentProjects.map((project) => (
            <div key={project.id} className="card">
              <h3>{project.title}</h3>
              <p className="student">by {project.name}</p>
              <p>{project.description}</p>
              <button onClick={() => showProject(project)}>Show Me</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Web Developers Club. All projects created by our talented students.</p>
      </footer>
    </div>
  );

  const ProjectView = () => {
    if (!selectedProject) return null;
    return (
      <div className="container">
        <header className="header">
          <h1>Web Developers Club</h1>
          <button className="back-button" onClick={navigateHome}>Back to Projects</button>
        </header>

        <main className="main">
          <div className="project">
            <h2>{selectedProject.title}</h2>
            <p className="student">Created by {selectedProject.name}</p>
            <div className="project-box">{selectedProject.component}</div>
            <h3>Description</h3>
            <p>{selectedProject.description}</p>
          </div>
        </main>

        <footer className="footer">
          <p>© 2025 Web Developers Club. All projects created by our talented students.</p>
        </footer>
      </div>
    );
  };

  return currentView === 'home' ? <HomeView /> : <ProjectView />;
};


export default WebDev;
