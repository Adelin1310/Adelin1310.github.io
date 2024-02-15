// FlyingHearts.js

import React from 'react';
import './styles/FlyingHearts.css';

const FlyingHearts = () => {
  return (
    <div className="hearts-container">
      {Array.from({ length: 10 }, (_, index) => (
        <div className="heart" key={index}></div>
      ))}
    </div>
  );
};

export default FlyingHearts;
