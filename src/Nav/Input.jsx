import { useState } from 'react';
import './input.css';
import { useNavigate } from 'react-router';
import { useSearch } from '../Search/SearchProvider';
import { CiSearch } from "react-icons/ci";

export default function Input() {
  const { searchQuery, setSearchQuery, setIsOpen, isOpen } = useSearch();
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsOpen(true);
  };

  const closeSearch = () => {
    setIsOpen(false);
    setSearchQuery('');
  };
  


  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    const params = new URLSearchParams();
    if (value.trim()) {
      params.set("query", value);
      navigate(`/home?${params.toString()}`, { replace: true });
    } else {
      navigate("/home", { replace: true });
    }
  };

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
            className="netflix-search-input"
            autoFocus
          />
          <button 
            className="close-search-btn"
            onClick={closeSearch}
            aria-label="Close search"
          >
            ×
          </button>
        </div>
      ) : (
        <button 
          className="search-toggle-btn"
          onClick={toggleSearch}
          aria-label="Open search"
        >
          <CiSearch size={20} />
        </button>
      )}
    </>
  );
}