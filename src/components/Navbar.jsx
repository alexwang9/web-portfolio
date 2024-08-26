import React from "react";
import '../styles/Navbar.css';

const Navbar = () => {

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={"navbar"}>
      <div className="navbar-logo">
        <a href="#section-1" onClick={(e) => handleSmoothScroll(e, 'section-1')}>AW</a>
      </div>
      <div className="navbar-links">
        <a href="#section-2" onClick={(e) => handleSmoothScroll(e, 'section-2')}>School</a>
        <a href="#section-3" onClick={(e) => handleSmoothScroll(e, 'section-3')}>Experience</a>
        <a href="#section-4" onClick={(e) => handleSmoothScroll(e, 'section-4')}>Projects</a>
        <a href="#section-5" onClick={(e) => handleSmoothScroll(e, 'section-5')}>Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar