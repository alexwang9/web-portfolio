import React from "react";

const Arrow = () => {
  return (
    <>
      <p>simple lightweight animated html/css floating arrow.</p>
      <svg class="arrow">
        <path class="a1" d="M0 0 L30 22 L60 0"></path>
        <path class="a2" d="M0 20 L30 42 L60 20"></path>
        <path class="a3" d="M0 40 L30 62 L60 40"></path>
      </svg>
    </>
  );
};

export default Arrow;
