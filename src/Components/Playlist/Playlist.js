import React from 'react';
import Track from '../Track/Track';
import styles from './Playlist.module.css';

function Playlist({selectedSongs, playlistName, onNameChange}){
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
                            id={index}
                            songName={element.songName}
                            artist={element.artist}
                            album={element.album}
                            onSelectSong="Playlist"
                        />
                    );
                })}
            </div>

            <button
                type="submit"
                form="playlistName"
                className={styles.saveToSpotify}
            >Save To Spotify</button>

        </div>
    );
}

export default Playlist;