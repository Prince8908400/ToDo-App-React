import React from "react";

const Button = ({ type, disabled, children, className }) => {
  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
