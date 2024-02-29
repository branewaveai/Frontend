import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search operation with the searchTerm
    // For example, you can redirect the user to a search results page
    window.open(`https://www.google.com/search?q=${searchTerm}`, '_blank');
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search Google"
          value={searchTerm}
          onChange={handleInputChange}
          required
        />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
