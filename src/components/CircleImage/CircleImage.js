import React from 'react';
import './CircleImage.css';

const CircleImage = ({ src, alt, size }) => {
  const circleStyle = {
    width: size,
    heigh: size,
  };
  
    return (
    <div className="circle-container" style={circleStyle}>
      <img src={src} alt={alt} className="circle-image" />
    </div>
  );
};

export default CircleImage;