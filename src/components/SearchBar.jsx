import React from "react";
import search_icon from "/assets/search.png";

const SearchBar = ({ inputRef, onSearch }) => (
  <>
    <div className="flex flex-row items-center justify-center w-full px-4 gap-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a province or city "
        className="search-bar focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />
      <img
        src={search_icon}
        alt="Search"
        className="search-bar"
        onClick={() => onSearch(inputRef.current.value)}
      />
    </div>
    <div className="w-full text-xs text-white text-center mt-4 flex items-center justify-center gap-1">
      <span className="inline-block align-middle" aria-label="info" title="info">
        {/* Info icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="none"/><rect x="11" y="10" width="2" height="6" rx="1" fill="#fff"/><rect x="11" y="7" width="2" height="2" rx="1" fill="#fff"/></svg>
      </span>
      <span>
        Type a province or city (e.g., Chiang Mai)
      </span>
    </div>
  </>
);

export default SearchBar;
