// SearchBar.jsx
import { useNavigate } from 'react-router';
import { useState } from 'react';
import './search.css'

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <div className="search-container">
      <input
          type="search"
          className="search-inputs"
          placeholder="Movies, shows and more"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
    </div>
  );
}
