import React from "react";
import whiteLogo from "../images/logo-white.png";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behaviour: 'smooth'});
};

const Icon = () => {
  return (
    <>
      <a href="#" onClick={scrollToTop}>
        <img src={whiteLogo} alt="logo"/>
      </a>
    </>
  );
};

export default Icon;