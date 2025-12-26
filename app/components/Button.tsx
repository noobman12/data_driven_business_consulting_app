import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "rounded-full px-6 py-2 font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "btn-gradient",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "border border-white text-white hover:bg-white/10",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
