import React from "react";

const Main = ({topText, middleText, bottomText}) => {
  return (
    <>
      <p>{topText}</p>
      <h1>{middleText}</h1>
      <p>{bottomText}</p>
    </>
  );
};

export default Main;