import { useState } from 'react';
import './input.css';
import { useNavigate } from 'react-router';

import { useSearch } from '../Search/SearchProvider';// Adjusted path

export default function Input() {
  

  const { searchQuery, setSearchQuery ,setIsOpen,isOpen} = useSearch();
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsOpen(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    const params = new URLSearchParams();
    if (value.trim()) {
      params.set("query", value);
      navigate(`/home?${params.toString()}`, { replace: true }); // like Netflix
    } else {
      navigate("/home", { replace: true }); // clears the search
    }
  };

  // const fi = (e) => {
    
  //   const value = e.target.value;

  // setSearchQuery(value);
  // // navigate(`/search?query=${encodeURIComponent(searchValue)}`);
  // };

  return (
    <>
      {isOpen ? (
        <div className="netflix-search-bar">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="search"
            className="netflix-search-icon"
          />
          <input
            type="text"
            placeholder="Titles, people, genres"
            value={searchQuery}
            onChange={handleChange}
            // onKeyDown={(e) =>  handleSearch()}
            className="netflix-search-input"
          />
        </div>
      ) : (
        <div onClick={toggleSearch}>
          <h1>🔍</h1>
        </div>
      )}
    </>
  );
}
