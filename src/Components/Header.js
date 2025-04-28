import React from 'react';
import umtlogo2 from '../Data/img/umtlogo2.png';
import '../CSS/Header.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="full-nav">
      <div className="header-logo">
        <NavLink to="/">
          <img className="nav-logo" src={umtlogo2} alt="UMT Logo" />
        </NavLink>
      </div>
      <div className="nav-bar">
        <ul>
          <NavLink to="/" className="nav-link">HOME</NavLink>
          <NavLink to="/Events" className="nav-link">EVENTS</NavLink>
          <NavLink to="/About" className="nav-link">ABOUT</NavLink>
          <NavLink to="/Clubs" className="clubs nav-link">Clubs</NavLink>
        </ul>
      </div>
    </nav>

  )
}

export default Header;
