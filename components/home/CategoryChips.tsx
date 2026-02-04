import React from 'react';

export const CategoryChips = () => {
  return (
    <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200">
      <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium transition-transform hover:scale-105">
        All News
      </button>
      
      <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100  hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-colors text-black ">
        Political Briefs
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      
      <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100  hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-colors text-gray-700 ">
        Religious Insights
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      
      <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100  hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-colors text-gray-700 ">
        Community Updates
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      
      <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-colors text-gray-700 ">
        Global Trends
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
    </div>
  );
};