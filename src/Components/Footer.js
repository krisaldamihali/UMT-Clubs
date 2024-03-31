import React from "react";
import "../CSS/Footer.css";
import instaLogo from "../Data/img/insta-logo.jpg";
import LinkedInLogo from "../Data/img/LinkedInLogo.jpg";


const Footer = () => {
  return (
    <footer>
      <div className="footer-contents-container">
        <div className="row">
          
          <span className="links-section">
            <a href="https://umt.edu.al/" className="contact-text">
              CONTACT
            </a>
            <a href="https://www.instagram.com/universiteti_metropolitan/">
              <img className="contact-images" src={instaLogo} alt="instalogo" />
            </a>
            <a href="https://al.linkedin.com/company/universiteti-metropolitan-tirana">
              <img className="contact-images" src={LinkedInLogo} alt="mail" />
            </a>
          </span>  
        
          <span className="copyright-section">
            
            <span className="copyright-message"> Copyright © UMT </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
