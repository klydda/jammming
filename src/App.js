import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Tracklist from './Components/Tracklist/TrackList';
import Track from './Components/Track/Track';

function App() {

  //State and event handler for search bar input
  const [search, setSearch] = useState('');

  function handleSearchInput(e) {
      setSearch(e.target.value);
  }

  //State and event handler for search bar submit
  const [url, setUrl] = useState('');
  function handleSearchSubmit(e) {
      e.preventDefault();
      const url = constructUrl();
      setUrl(url);
  }

  //Constructs correct URL based on search input
  function constructUrl() {
      const baseUrl = 'part1'
      const searchQuery = search;
      return `${baseUrl}${searchQuery}`;
  }

  //State and state setter that contains the search result as a list of songs
  const [searchResults, setSearchResults] = useState([]);
  function handleSearchResults(songs){
    setSearchResults(songs);
  }

  //State and state setter that contains the list of selected songs by the user
  const [trackList, setTrackList] = useState([]);
  function handleTrackList(tracks){
    setTrackList(...tracks);
  }

  return (
      <div className="App">
          <SearchBar
              search={search}
              onSearch={handleSearchInput}
              onSubmit={handleSearchSubmit}
          />
          
          <SearchResults 
              url={url}
              onSearchResults={handleSearchResults}
          />

          <div>
            <Tracklist 
              songList={searchResults}
            />
          </div>

      </div>
      
  );
}

export default App;
