import React from 'react';
import Track from '../Track/Track';
import styles from './Playlist.module.css';

function Playlist({selectedSongs, playlistName, onNameChange, onRemoveSong, onSave, onClickAlbum, playlistAnimated}){

    const animationClass = playlistAnimated && selectedSongs.length > 0 ? styles.animatePlaylist : '';

    if(!selectedSongs[0]){
        return (
            <div className={styles.songListWrapperOff}>
                <div className={styles.formContainer}>
                    <form
                        id='playlistName'
                        autoComplete='off'
                    >
                        <input
                            id="playlistName"
                            type='text'
                            placeholder='Enter playlist name'
                            className={styles.input}
                            value={playlistName}
                            onChange={onNameChange}
    
                        />
                    </form>
                </div>
                <div className={styles.tracksWrapper}>
                    {selectedSongs.map((element, index) => {
                        return(
                            <Track
                                key={`song${index}`}
                                id={element.id}
                                songName={element.songName}
                                artist={element.artist}
                                album={element.album}
                                albumUri={element.albumUri}
                                uri={element.uri}
                                onSelectSong="Playlist"
                                onRemoveSong={onRemoveSong}
                                onClickAlbum={onClickAlbum}
                            />
                        );
                    })}
                </div>
    
                <button
                    type="submit"
                    form="playlistName"
                    onClick={onSave}
                >Save To Spotify</button>
    
            </div>
        );
    } else if (selectedSongs && !playlistName) {
        return (
            <div className={`${styles.songListWrapper} ${animationClass}`}>
                <div className={styles.formContainer}>
                    <form
                        id='playlistName'
                        autoComplete='off'
                    >
                        <input
                            id="playlistName"
                            type='text'
                            placeholder='Enter playlist name'
                            className={styles.input}
                            value={playlistName}
                            onChange={onNameChange}
    
                        />
                    </form>
                </div>
                <div className={styles.tracksWrapper}>
                    {selectedSongs.map((element, index) => {
                        return(
                            <Track
                                key={`song${index}`}
                                id={element.id}
                                songName={element.songName}
                                artists={element.artists}
                                album={element.album}
                                albumUri={element.albumUri}
                                uri={element.uri}
                                onSelectSong="Playlist"
                                onRemoveSong={onRemoveSong}
                                onClickAlbum={onClickAlbum}
                            />
                        );
                    })}
                </div>
    
                <button
                    type="submit"
                    form="playlistName"
                    onClick={onSave}
                    className={styles.saveToSpotifyOff}
                >Save To Spotify</button>
    
            </div>
        );

    } else {
        return (
            <div className={styles.songListWrapper}>
                <div className={styles.formContainer}>
                    <form
                        id='playlistName'
                        autoComplete='off'
                    >
                        <input
                            id="playlistName"
                            type='text'
                            placeholder='Enter playlist name'
                            className={styles.input}
                            value={playlistName}
                            onChange={onNameChange}
    
                        />
                    </form>
                </div>
                <div className={styles.tracksWrapper}>
                    {selectedSongs.map((element, index) => {
                        return(
                            <Track
                                key={`song${index}`}
                                id={element.id}
                                songName={element.songName}
                                artists={element.artists}
                                album={element.album}
                                uri={element.uri}
                                onSelectSong="Playlist"
                                onRemoveSong={onRemoveSong}
                            />
                        );
                    })}
                </div>
    
                <button
                    type="submit"
                    form="playlistName"
                    onClick={onSave}
                    className={styles.saveToSpotify}
                >Save To Spotify</button>
    
            </div>
        );
    }


}

export default Playlist;
