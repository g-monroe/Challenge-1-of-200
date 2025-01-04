import React from 'react';
import { Badge } from './Badge';
import { Button } from './Button';

interface PriceCardProps {
  price: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  bgColor?: string;
  hoverColor?: string;
  priceTagColor?: string;
  action: {
    label: string;
    variant?: 'primary' | 'secondary';
  };
  onClick: () => void;
}

export function PriceCard({
  price,
  title,
  description,
  badge,
  badgeColor,
  bgColor,
  hoverColor,
  priceTagColor,
  action,
  onClick,
}: PriceCardProps) {
  return (
    <div 
      className={`group relative rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${bgColor} ${hoverColor} hover:shadow-50`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className={`${priceTagColor} rounded-lg p-2.5 ring-1 ring-white/50 shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:border-4 group-hover:border-white`}>
            <div className="text-xl font-bold">
              {price}
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="text-base font-medium">{title}</div>
                {badge && <Badge color={badgeColor}>{badge}</Badge>}
              </div>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
            <Button 
              variant={action.variant} 
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="whitespace-nowrap"
            >
              {action.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}