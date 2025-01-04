import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button({ 
  children, 
  variant = 'primary',
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = "px-3 py-1.5 rounded-md text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-black text-white hover:bg-black/90",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    link: "px-0 py-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}