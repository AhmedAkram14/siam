// "use client";
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  optionalStyle?: string; // Define optionalStyle as an optional prop
}

const Button: React.FC<ButtonProps> = (
  { children, optionalStyle }, // Destructure optionalStyle from props
  className = "uppercase text-xs flex items-center gap-2 md:text-base bg-red-500 text-white py-3 px-8 md:py-3 md:px-10 mt-3 md:mt-8 hover:bg-white hover:text-red-500 transition-all duration-300 font-bold"
) => {
  return (
    <button className={`${className} ${optionalStyle}`}>{children}</button>
  );
};

export default Button;
