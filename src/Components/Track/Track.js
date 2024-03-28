import React from 'react';
import styles from './Tracks.module.css';

function Track({ id, songName, artist, album }) {
    return (
        <div className={styles.trackWrapper}>
             <div 
            id={`song${id}`}
            className={styles.trackInfo} >
            <h4 
                className={styles.songName} >
                {songName}
            </h4>
            <span>{artist}</span>
            <span>{album}</span>
            </div>

            <div className={styles.buttonWrapper}>
                <button>X</button>
            </div>

        </div>
       
    )
}

export default Track;