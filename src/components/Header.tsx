import React from 'react';

interface HeaderProps {
  title: string;
  action?: React.ReactNode;
}

export function Header({ title, action }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
      {action && <div>{action}</div>}
    </div>
  );
}