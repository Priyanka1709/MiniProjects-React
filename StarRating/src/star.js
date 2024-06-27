// Star.js
import React from 'react';

const Star = ({ filled }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? "#ffcc00" : "#d3d3d3"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="12,2 15,9 22,9 17,13 19,20 12,16 5,20 7,13 2,9 9,9"/>
  </svg>
);

export default Star;
