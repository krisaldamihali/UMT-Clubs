// import '../CSS/App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Events from '../Components/Events.js';
import About from './About.js';
import Clubs from '../Components/Clubs.js';
import WebDev from '../Components/WebDev.js';
import GDSC from '../Components/GDSC.js';
import AppDev from '../Components/AppDev.js';
import GameDev from '../Components/GameDev.js';
import AI from '../Components/AI.js';
import CyberSec from '../Components/CyberSec.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="/web-development" element={<WebDev />} /> 
          <Route path="/gdsc" element={<GDSC />} /> 
          <Route path="/app-development" element={<AppDev />} /> 
          <Route path="/game-development" element={<GameDev />} /> 
          <Route path="/ai" element={<AI />} />
          <Route path="/cybersecurity" element={<CyberSec />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;









