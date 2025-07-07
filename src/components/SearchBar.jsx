import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ inputRef, onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <div className="relative w-full">
      {/* Search container with glass effect */}
      <div className={`relative backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl transition-all duration-300 ${isFocused ? 'bg-white/30 border-white/50 shadow-lg' : 'hover:bg-white/25'}`}>
        <div className="flex items-center px-5 py-4">
          {/* Search icon */}
          <FiSearch 
            className="text-white/70 mr-3 text-lg cursor-pointer transition-colors duration-200 hover:text-white"
            onClick={() => onSearch(inputRef.current.value)}
          />
          
          {/* Input field */}
          <input
            ref={inputRef}
            type="text"
            placeholder="Search city name..."
            className="flex-1 bg-transparent text-white placeholder:text-white/60 outline-none text-sm font-medium"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyPress={handleKeyPress}
          />
          
          {/* Search button */}
          <button
            onClick={() => onSearch(inputRef.current.value)}
            className="ml-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-white/80 hover:text-white text-xs font-medium transition-all duration-200 border border-white/20 hover:border-white/40"
          >
            Search
          </button>
        </div>
        
        {/* Subtle border glow when focused */}
        {isFocused && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-white/10 blur-sm -z-10"></div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
