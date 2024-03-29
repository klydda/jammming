import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Tracklist from './Components/Tracklist/TrackList';
import Playlist from './Components/Playlist/Playlist';

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

  //State and state setters. First contains array of song names, second of song objects.
  const [selectedSongIds, setSelectedSongIds] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  function handleSetSelectedSong(e){
    const song = e.target.id;
    setSelectedSongIds((prev) => {
      return [
        ...prev,
        song
      ]
    });

    const filteredSongs = [];

    searchResults.forEach((song) =>{
      selectedSongIds.forEach((id) => {
        if(song.songName === id){
          filteredSongs.push(song);
        }
      })
    });

    setSelectedSongs(filteredSongs);
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

          <div className='lists'>
          <Tracklist 
            songList={searchResults}
            onSelectSong={handleSetSelectedSong}
          />

          <Playlist 
            selectedSongs={selectedSongs}
          />
          </div>


      </div>
      
  );
}

export default App;
