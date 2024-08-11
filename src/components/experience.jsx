import React from "react";

const Experience = ({date1, date2, title, description}) => {
  return (
    <>
      <p>{date1} -- {date2}</p>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Experience