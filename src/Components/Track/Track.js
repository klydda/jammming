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
            <span className={styles.infoSpan}>👤 {artist}</span>
            <span className={styles.divider}>|</span>
            <span>💿 {album}</span>
            </div>

            <div className={styles.buttonWrapper}>
                <button className={styles.button}>+</button>
            </div>

        </div>
       
    )
}

export default Track;