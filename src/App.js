import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Tracklist from './Components/Tracklist/TrackList';
import Playlist from './Components/Playlist/Playlist';
import AuthButton from './Components/AuthButton/AuthButton';
import { redirectToAuth, extractToken } from './Components/spotifyAPI/spotifyAuth';
import spotifySearch from './Components/spotifyAPI/spotifySearch';
import spotifyUser from './Components/spotifyAPI/spotifyUser';
import newPlayList from './Components/spotifyAPI/spotifySavePlaylist';

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
      spotifySearch(accessToken, search, setSearchResults);
  }

  //State and state setter that contains the search result as a list of songs
  const [searchResults, setSearchResults] = useState([]);
  function handleSearchResults(songs){
    setSearchResults(songs);
  }

  //SELECTED SONGS: recieves e.target.id, finds equivalent song in searchResults, adds it to selectedSongs state
  const [selectedSongs, setSelectedSongs] = useState([]);
  function handleSetSelectedSong(e){
    const id = e.target.id;
    const song = searchResults.find((song) => song.id === id);

    if(song){
      setSelectedSongs((prev) => [...prev, song]);
    }
  }

  function handleRemoveSelectedSong(e){
    const songToRemove = e.target.id;

    const filtered = selectedSongs.filter((song) => song.id !== songToRemove);
    setSelectedSongs(filtered);
  }

  //State and event handler managing playlist name
  const [playlistName, setPlaylistName] = useState('');

  function handlePlaylistNameInput(e){
    setPlaylistName(e.target.value);
  }

  async function handleSave(e){
    e.preventDefault();

    if(playlistName){
      const user = await spotifyUser(accessToken);
      newPlayList(user.id, playlistName, accessToken, selectedSongs);

    } else {
      alert('Please enter a name for your playlist before saving');
    }
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
            onSave={handleSave}
          />
          </div>


      </div>
      
  );
}

export default App;
