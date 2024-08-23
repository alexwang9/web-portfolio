import React from "react";
import '../styles/Experience.css';

const Experience = ({date1, date2, title, description, datesColor, titleColor, descColor}) => {
  return (
    <div className="container">
      <p className="dates" style={{ color: datesColor }}>{date1} — {date2}</p>
      <p className="title" style={{ color: titleColor }}>{title}</p>
      <p className="description" style={{ color: descColor }}>{description}</p>
    </div>
  );
};

export default Experience
