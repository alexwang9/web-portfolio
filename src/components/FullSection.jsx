import React from "react";
import '../styles/FullSection.css';

const FullSection = ({ children, id, isLast, backgroundColor }) => {
  const handleScroll = () => {
    const nextSectionId = `section-${parseInt(id.split('-')[1]) + 1}`;
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="full-section" id={id} style={{ backgroundColor }}>
      {children}
      {!isLast && (
        <button onClick={handleScroll} className="down-arrow">
        </button>
      )}
    </div>
  );
};

export default FullSection;