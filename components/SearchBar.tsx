
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tra cứu bài viết, văn bản pháp luật..."
        className="w-full pl-10 pr-4 py-2 border-2 border-[#2d4a22]/20 rounded-full focus:outline-none focus:border-[#2d4a22] transition-all text-sm bg-slate-50"
      />
      <div className="absolute left-3 top-2.5 text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <button 
        type="submit" 
        className="absolute right-2 top-1.5 bg-[#2d4a22] text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-[#4a6d3c]"
      >
        Tìm
      </button>
    </form>
  );
};

export default SearchBar;
