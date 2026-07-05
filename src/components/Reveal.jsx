import React from 'react';
import useInView from '../hooks/useInView';

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
