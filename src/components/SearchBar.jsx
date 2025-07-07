import React from "react";
import search_icon from "/assets/search.png";

const SearchBar = ({ inputRef, onSearch }) => (
  <div className="flex flex-row items-center justify-center w-full px-4 gap-4">
    <input
      ref={inputRef}
      type="text"
      placeholder="Search"
      className="search-bar"
    />
    <img
      src={search_icon}
      alt="Search"
      className="search-bar"
      onClick={() => onSearch(inputRef.current.value)}
    />
  </div>
);

export default SearchBar;
