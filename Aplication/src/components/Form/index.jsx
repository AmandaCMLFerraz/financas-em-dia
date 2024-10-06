import React from 'react';

const Form = ({ className, children, onSubmit }) => {
  return (
    <form
      className={`flex flex-col w-4/5 items-center mx-auto ${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
