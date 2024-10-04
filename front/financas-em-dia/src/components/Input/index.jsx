import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-2 border rounded-3xl mb-5 w-3/4 ${className}`}
    />
  );
};

export default Input;
