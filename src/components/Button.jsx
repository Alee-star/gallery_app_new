import React from "react";

const Button = ({ label, onClick, className, isDisabled = false }) => {
  return (
    <button
      className={`bg-white text-black cursor-pointer ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
