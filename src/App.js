import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Tracklist from './Components/Tracklist/TrackList';
import Playlist from './Components/Playlist/Playlist';
import AuthButton from './Components/AuthButton/AuthButton';
import { redirectToAuth, extractToken } from './Components/spotifyAPI/spotifyAuth';

let accessToken = '';

function App() {

  //Handle auth
  const [auth, setAuth] = useState(false);
  function handleAuth(e){
    redirectToAuth();
    setAuth(true);
  }

  useEffect(() => {
    const token = extractToken();

    if(token){
      console.log('Token found: ' + token);
      accessToken = token;
      setAuth(true);
    }
  }, []);

  //State and event handler for search bar input
  const [search, setSearch] = useState('');

  function handleSearchInput(e) {
      setSearch(e.target.value);
  }

  //State and event handler for search bar submit
  const [url, setUrl] = useState('');
  function handleSearchSubmit(e) {
      e.preventDefault();
      accessToken = extractToken();
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
    const songId = e.target.id;
    setSelectedSongIds((prev) => [...prev, songId]);
  }

  function handleRemoveSelectedSong(e){
    const songToRemove = e.target.id;
    const filteredIdList = selectedSongIds.filter((song) => song !== songToRemove);
    setSelectedSongIds(filteredIdList);
  }

  //Updates selectedSongs based on change in selectedSongIds
  useEffect(() => {
    const filteredSongs = searchResults.filter((song) => {
      return selectedSongIds.includes(song.id);
    });

    setSelectedSongs(filteredSongs);
  }, [selectedSongIds]);

  //State and event handler managing playlist name
  const [playlistName, setPlaylistName] = useState('');

  function handlePlaylistNameInput(e){
    setPlaylistName(e.target.value);
  }

  console.log(accessToken);

  if(auth === false){
    return (
      <div className='App'>
        <AuthButton onClick={handleAuth} />
        <p>{accessToken}</p>
      </div>
    );
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
            playlistName={playlistName}
            onRemoveSong={handleRemoveSelectedSong}
            onNameChange={handlePlaylistNameInput}
          />
          </div>


      </div>
      
  );
}

export default App;
