import React from 'react';
import { Tv } from 'lucide-react';

interface LogoProps {
  color?: 'dark' | 'white';
}

const Logo: React.FC<LogoProps> = ({ color = 'dark' }) => {
  const textColor = color === 'white' ? 'text-white' : 'text-primary';
  
  return (
    <div className="flex items-center">
      <div className="mr-2 bg-gradient-to-r from-secondary to-accent p-2 rounded-lg">
        <Tv className="w-6 h-6 text-white" />
      </div>
      <span className={`text-2xl font-bold ${textColor}`}>
        Digi<span className="text-accent">Souk</span>
      </span>
    </div>
  );
};

export default Logo;