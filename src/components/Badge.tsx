import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export function Badge({ children, color = 'bg-gray-100 text-gray-800' }: BadgeProps) {
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${color}`}>
      {children}
    </span>
  );
}