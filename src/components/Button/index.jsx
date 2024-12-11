import React from "react";

const Button = ({ label, onClick, className, isDisabled = false }) => {
  return (
    <button className={`${className}`} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
