import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Tracklist from './Components/Tracklist/TrackList';
import Playlist from './Components/Playlist/Playlist';
import AuthButton from './Components/AuthButton/AuthButton';
import { redirectToAuth, extractToken } from './Components/spotifyAPI/spotifyAuth';

//API info
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
  function handleSearchSubmit(e) {
      e.preventDefault();
      fetchSongs();
  }

  async function fetchSongs() {
    const searchBaseURL = 'https://api.spotify.com/v1/search';
    const queryBase = '?q=';
    const generalSearch = encodeURIComponent(search);
    const type = 'type=track';
    const queryString = `${queryBase}${generalSearch}&${type}`;
    const encodedString = encodeURIComponent(queryString);
    const url = searchBaseURL + queryString;

    console.log(url);

    try {
      const headers = {
        'Authorization': `Bearer ${accessToken}`
      };
  
      // Await the response of the fetch call, including the headers in the options
      const response = await fetch(url, {
        method: 'GET',
        headers: headers 
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Await the response to be parsed as JSON
      const data = await response.json();
      // Do something with the data
      console.log(data);
      
      const processedSongs = formatSongs(data);
      setSearchResults(processedSongs);
      
    } catch (error) {
      // Log any errors to the console
      console.error('There was a problem with your fetch operation:', error);
    }
  }

  //
  function formatSongs(json){
    if (json.tracks && json.tracks.items){
        const items = json.tracks.items;
        const songs = items.map((item) =>{
            return {
                id: item.id,
                songName: item.name,
                artist: item.artists[0].name,
                album: item.album.name,
                uri: item.uri
            };
        });

        return songs;

    } else {
        return [];
    }

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

  if(auth === false){
    return (
      <div className='App'>
        <AuthButton onClick={handleAuth} />
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
