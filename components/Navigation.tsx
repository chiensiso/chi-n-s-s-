
import React from 'react';
import { Category } from '../types';

interface NavigationProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeCategory, onCategoryChange }) => {
  const categories = Object.values(Category);

  return (
    <nav className="bg-[#2d4a22] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center h-auto md:h-16 py-2 md:py-0">
          <div className="flex space-x-1 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap
                  ${activeCategory === cat 
                    ? 'bg-yellow-500 text-black' 
                    : 'hover:bg-[#4a6d3c]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden lg:block text-yellow-500 font-bold tracking-widest oswald">
            QUYẾT CHIẾN - QUYẾT THẮNG
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
