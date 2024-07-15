import React from "react";

interface overlayProps {
  children?: React.ReactNode;
  optionalStyle?: string;
}
const Overlay: React.FC<overlayProps> = ({ children, optionalStyle }) => {
  return (
    <div className={`absolute inset-0 bg-black opacity-60 ` + optionalStyle}>
      {children}
    </div>
  );
};

export default Overlay;
