import React from "react";
import '../styles/Main.css';

const Main = ({topText, middleText, bottomText, topTextColor, middleTextColor, bottomTextColor}) => {

  return (
    <div className="text-container">
      <p className="top-text" style={{ color: topTextColor }}>{topText}</p>
      <h1 className="middle-text" style={{ color: middleTextColor }}>{middleText}</h1>
      <div style={{ whiteSpace: 'pre-line' }}>
        <p className="bottom-text" style={{ color: bottomTextColor }}>{bottomText}</p>
      </div>
    </div>
  );
};

export default Main;