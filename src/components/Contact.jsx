import React from "react";
import github from "../images/github-logo.png";
import ig from "../images/ig-logo.png";
import linkedin from "../images/linkedin-logo.png";
import resume from "../images/resume-logo.png";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="icon-list">
      <a href="https://www.linkedin.com/in/alexscwang/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center"}}>
        <img src={linkedin} alt="linkedin" className="linkedin-img"/>
        <p>linkedin</p>
      </a>
      <a href="https://github.com/alexwang9" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center"}}>
        <img src={github} alt="github" className="github-img"/>
        <p>github</p>
      </a>
      <a href="https://drive.google.com/file/d/1LNI5CZ9rIJwjkq43XmJvuMoyhVMYSF7v/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center"}}>
        <img src={resume} alt="resume" className="resume-img"/>
        <p>resume</p>
      </a>
      <a href="https://www.instagram.com/_alexwang/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center"}}>
        <img src={ig} alt="ig" className="ig-img"/>
        <p>instagram</p>
      </a>
    </div>
  );
};

export default Contact;
