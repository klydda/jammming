import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist({songList, url}){

    return (
        <div className={styles.songListWrapper}>
            <div className={styles.searchResultsWrapper}>
                {songList.map((element, index) => {
                    return(
                        <Track
                            id={index}
                            songName={element.songName}
                            artist={element.artist}
                            album={element.album}
                        />
                    );
                })}
            </div>
        </div>
    );

}

export default Tracklist;