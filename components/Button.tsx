import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="uppercase text-xs md:text-base bg-red-500 py-2 px-6 md:py-3 md:px-10 mt-3 md:mt-8 hover:bg-white hover:text-red-500 transition-all duration-300 font-bold">
      {children}
    </button>
  );
};

export default Button;
