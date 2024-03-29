import React from 'react';
import Track from '../Track/Track';
import styles from './Playlist.module.css';

function Playlist({selectedSongs, playlistName, onNameChange}){
    return (
        <div className={styles.songListWrapper}>
            <div>
                <form
                    id='playlistName'
                >
                    <input
                        id="playlistName"
                        type='text'
                        value={playlistName}
                        onChange={onNameChange}

                    />
                </form>
            </div>
            <div className={styles.searchResultsWrapper}>
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

        </div>
    );
}

export default Playlist;