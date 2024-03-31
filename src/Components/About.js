import React from "react";
import "../CSS/About.css";
import Footer from "./Footer.js";

const About = () => {
    const Card = ({ imgSrc, altText, position, name }) => {
        return (
            <div className="card">
                <div className="picture">
                    <img src={imgSrc} alt={altText} />
                </div>

                <div className="team-info">
                    {" "}
                    <p className="team-members-subtitle">{name}</p>
                    <p className="team-title">
                        <strong>{position}</strong>
                    </p>
                </div>
            </div>
        );
    };

    const teamMembers = [
        { imgSrc: require("../Data/img/kris.jpeg"), altText: "Krisalda Mihali", name: "Krisalda Mihali" },
        { imgSrc: require("../Data/img//megi.jpeg"), altText: "Megita Mema", name: "Megita Mema" },
        { imgSrc: require("../Data/img//mishel.jpeg"), altText: "Mishel Spaho", name: "Mishel Spaho" },
        { imgSrc: require("../Data/img//egers.jpeg"), altText: "Egers Braho", name: "Egers Braho" },
        { imgSrc: require("../Data/img//arisa.jpeg"), altText: "Arisa Ndreu", name: "Arisa Ndreu" },
        { imgSrc: require("../Data/img//sidrit.jpeg"), altText: "Sidrit Dervishi", name: "Sidrit Dervishi" },
        { imgSrc: require("../Data/img//emluis.jpeg"), altText: "Emluis Komino", name: "Emluis Komino" },
        { imgSrc: require("../Data/img//xhesiba.jpeg"), altText: "Xhesiba Saraci", name: "Xhesiba Saraci" },
        { imgSrc: require("../Data/img//dario.jpeg"), altText: "Dario Begvarfaj", name: "Dario Begvarfaj" },
        
    ];

    return (
        <>
            <div className="about">
                <style>@import url('https://fonts.googleapis.com/css2?family=Assistant&display=swap');</style>
                <div className="about-section">
                    <div className="about-message-section">
                        <div className="about-title">About</div>
                        <div className="about-text">Learn the ways that UMT can help you get started in technology.!</div>
                    </div>
                    <div className="goal-message-section">
                        <div className="goal-title">Our Goal</div>
                        <div className="goal-text">
                            Student clubs at Metropolitan University Tirana  were formed to provide <strong>support, advice, </strong>
                            and <strong>opportunities</strong> for people ready to start a career in technology but who don't know where to
                            begin. We bring in panels of people currently in the field to answer questions, help prepare for interviews, work to give
                            people a head start in their career!
                        </div>
                    </div>
                    <div className="team-members-section">
                        <h1 className="team-members-title">Board Members</h1>
                        <p className="team-members-subtitle">2023-2024</p>
                        <div className="picture-container">
                            {teamMembers.map((member) => (
                                <Card
                                    key={member.position}
                                    imgSrc={member.imgSrc}
                                    name={member.name}
                                    altText={member.altText}
                                    position={member.position}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default About;
