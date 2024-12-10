import React from "react";

interface ButtonProps {
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
}

const Button = ({
  label,
  onClick,
  className = "",
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`text-black cursor-pointer ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
