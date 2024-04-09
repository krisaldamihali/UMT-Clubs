import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Clubs.css';
import catg1Image from '../Data/img/catg1.jpg';
import catg2Image from '../Data/img/catg2.jpeg';
import catg3Image from '../Data/img/catg3.jpeg';
import catg4Image from '../Data/img/catg4.jpg';
import catg5Image from '../Data/img/catg5.jpeg';
import catg6Image from '../Data/img/catg6.png';

const categories = [
  {
    title: "Web Development",
    image: catg1Image,
    info: "Provides information and training for developing web applications and websites.",
    link: "/web-development"
  },
  {
    title: "App Development",
    image: catg2Image,
    info: "Offers guidance and resources for developing applications for mobile devices.",
    link: "/app-development"
  },
  {
    title: "Game Development",
    image: catg3Image,
    info: "Provides resources and guidance for developing digital games.",
    link: "https://clubs.umt.edu.al/game/index.html"
  },
  {
    title: "Cybersecurity",
    image: catg5Image,
    info: "Training and articles related to cybersecurity and ways to protect information online.",
    link: "/cybersecurity"
  },
  {
    title: "AI",
    image: catg4Image,
    info: "A source for artificial intelligence science and AI application development.",
    link: "https://aidevclub.wixsite.com/ai-developers-club"
  },
  {
    title: "GDSC",
    image: catg6Image,
    info: "Information and activities from Google Developer Student Clubs for students interested in technology and software development.",
    link: "/gdsc"
  }
];

function Clubs() {
  return (
    <div className="clubs-container">
      <h1>Student Clubs</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <Category
            key={index}
            title={category.title}
            image={category.image}
            info={category.info}
            link={category.link}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Category({ title, image, info, link }) {
  const isExternalLink = link.startsWith('http');
  const linkComponent = isExternalLink ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button>Learn More</button>
    </a>
  ) : (
    <Link to={link}>
      <button>Learn More</button>
    </Link>
  );

  return (
    <div className="category">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{info}</p>
      {linkComponent}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      &copy; UMT Clubs
    </footer>
  );
}

export default Clubs;
