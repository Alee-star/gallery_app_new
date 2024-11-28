import React from "react";

const Button = ({ label, onClick, isDisabled = false, className }) => {
  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
