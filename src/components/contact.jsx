import React from "react";
import github from "../images/github-logo.png";
import ig from "../images/ig-logo.png";
import linkedin from "../images/linkedin-logo.png";
import resume from "../images/resume-logo.png";

const Contact = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/alexscwang/">
        <img href={linkedin} alt="linkedin"/>
      </a>
      <a href="https://github.com/alexwang9">
        <img href={github} alt="githubt"/>
      </a>
      <a href="https://drive.google.com/file/d/1LNI5CZ9rIJwjkq43XmJvuMoyhVMYSF7v/view?usp=sharing">
        <img href={resume} alt="resume"/>
      </a>
      <a href="https://www.instagram.com/_alexwang/">
        <img href={ig} alt="ig"/>
      </a>
    </>
  );
};

export default Contact;