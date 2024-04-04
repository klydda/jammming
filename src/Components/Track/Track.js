import React from 'react';
import styles from './Tracks.module.css';


function Track({ id, songName, artist, album, albumUri, onSelectSong, onRemoveSong, onClickAlbum }) {

    if(onSelectSong==='Playlist'){
        return (
            <div className={styles.trackWrapper} id={`song${id}`}>
                <div className={styles.trackInfo} >
                    <h4 className={styles.songName}>{songName}</h4>
                    <span className={styles.infoSpan}>{artist}</span>
                    <span className={styles.divider}>|</span>
                    <span 
                        className={styles.infoSpan}
                        onClick={onClickAlbum}>{album}</span>
                </div>

                <div className={styles.buttonWrapper}>
                    <button 
                        className={styles.button}
                        id={id}
                        onClick={onRemoveSong}>x</button>
                </div>

            </div>
           
        );
    } else {
        return (
            <div className={styles.trackWrapper} id={`song${id}`}>
                <div className={styles.trackInfo} >
                    <h4 className={styles.songName}>{songName}</h4>
                    <span className={styles.infoSpan}>{artist}</span>
                    <span className={styles.divider}>|</span>
                    <span 
                        className={styles.infoSpan}
                        id={albumUri}
                        onClick={onClickAlbum}>{album}</span>
                </div>

                <div className={styles.buttonWrapper}>
                    <button 
                        className={styles.button}
                        id={id}
                        onClick={onSelectSong}>+</button>
                </div>

            </div>
           
        );
    }

}

export default Track;