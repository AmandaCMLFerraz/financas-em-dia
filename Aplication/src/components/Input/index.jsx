import React, { forwardRef } from 'react';

const Input = forwardRef(({ type, placeholder, value, onChange, className }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-2 border rounded-3xl mb-5 w-3/4 ${className}`}
      ref={ref}  // Use o ref aqui
    />
  );
});

export default Input;
