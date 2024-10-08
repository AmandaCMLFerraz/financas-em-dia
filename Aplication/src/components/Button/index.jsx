import React from 'react';

const Button = ({ children, onClick, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mb-5 px-8 py-2 border rounded-3xl bg-blue-600 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
