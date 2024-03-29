import React from 'react';
import Track from '../Track/Track';
import styles from './Playlist.module.css';

function Playlist({selectedSongs}){
    return (
        <div className={styles.songListWrapper}>
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