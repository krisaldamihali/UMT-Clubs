import React from "react";
import "../CSS/CyberSec.css";

function CyberSec() {
  const handleButtonClick = () => {
    window.open(
      "https://clubs.umt.edu.al/cyber-challenge/TS1.ova",
      "_blank"
    );
  };

  return (
    <div className="cyber-sec-container">
      <h1 className="cyber-sec-title">Cybersecurity Club</h1>
      <div className="cyber-sec-content">
        <div className="cyber-sec-text">
          <p>
            Dive deep into Kali Linux, the go-to operating system for
            penetration testing and ethical hacking. Learn to utilize its vast
            array of tools and features, from reconnaissance to exploitation,
            as we navigate through real-world scenarios and hands-on
            exercises.Discover the power of Nmap, the industry-standard network
            scanning tool. Uncover hidden vulnerabilities, map out network
            topologies, and strengthen your understanding of network security
            fundamentals.Our club provides a supportive and collaborative
            environment for enthusiasts of all levels to learn, experiment, and
            grow. Whether you're taking your first steps into cybersecurity or
            aiming to enhance your skills, join us on this exciting journey as
            we explore the thrilling realm of digital defense and offense.
          </p>
          <h2>Cyber Hacking Challenge</h2>
          <p>
            Engage in a cyber hacking challenge by executing penetration
            testing and vulnerability scanning on the designated system with
            the following aims:
          </p>
          <ol>
            <li>
              Discover and document at least two exploits providing remote
              command-line access for each target system. Out of these two
              exploits for each target system, at least one method, either
              directly or through privilege escalation, must allow you to gain
              full control over the machine, equivalent to the root,
              Administrator, or SYSTEM user.
            </li>
            <li>
              Discover at least two existing user accounts (usernames and
              passwords) that provide remote command-line access for each target
              system. The existing passwords must be provided in plain text.
            </li>
            <li>
              Document your methods and the results, and include an executive
              summary that outlines the next steps to be taken.
            </li>
            <li>
              Hint: Use VirtualBox and Kali Linux to find vulnerabilities if you
              want to try this challenge.
            </li>
          </ol>
          <div>
          <button className="cyber-sec-button" onClick={handleButtonClick}>
            Cyber Hacking Challenge
          </button>
          </div>
        </div>
      </div>
      <footer className="cyber-sec-footer">&copy; Copyright © UMT</footer>
    </div>
  );
}

export default CyberSec;