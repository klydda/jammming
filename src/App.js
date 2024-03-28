import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

function App() {
  const [search, setSearch] = useState('');
  const [url, setUrl] = useState('');

  function handleSearchInput(e) {
      setSearch(e.target.value);
  }

  function handleSubmit(e) {
      e.preventDefault();
      const url = constructUrl();
      setUrl(url);
  }

  function constructUrl() {
      const baseUrl = 'part1'
      const searchQuery = search;
      return `${baseUrl}${searchQuery}`;
  }

  return (
      <div className="App">
          <SearchBar
              search={search}
              onSearch={handleSearchInput}
              onSubmit={handleSubmit}
          />
          <SearchResults 
              url={url}
          />
      </div>
      
  );
}

export default App;
