import React from 'react';
import { Truck } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-korzen-charcoal text-white py-2 px-4 text-center text-sm font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
        <Truck className="h-4 w-4 text-korzen-sand" />
        <span>Darmowa dostawa od 200 zł</span>
      </div>
    </div>
  );
};

export default TopBar;
