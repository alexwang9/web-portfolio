import React from 'react';
import useTypewriter from '../hooks/useTypewriter';

const TypewriterText = ({ 
  phrases, 
  className = '', 
  cursorClassName = '',
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000 
}) => {
  const text = useTypewriter(phrases, speed, deleteSpeed, pauseDuration);

  return (
    <span className={className}>
      {text}
      <span className={`animate-pulse ${cursorClassName}`}>|</span>
    </span>
  );
};

export default TypewriterText; 