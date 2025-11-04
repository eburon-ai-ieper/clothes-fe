import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`${className} bg-gray-900 p-2 px-3 rounded-xl text-white cursor-pointer duration-150 hover:scale-105`}
    >
      {children}
    </button>
  );
};

export default Button;
