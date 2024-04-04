import React from 'react';
import styles from './Tracks.module.css';


function Track({ id, songName, artists, album, albumUri, onSelectSong, onRemoveSong, onClickAlbum, onClickArtist }) {

    if(onSelectSong==='Playlist'){
        return (
            <div className={styles.trackWrapper} id={`song${id}`}>
                <div className={styles.trackInfo} >
                    <h4 className={styles.songName}>{songName}</h4>
                    <div className={styles.artists}>
                        {
                            artists.map((artist, index) => {
                                return (
                                    <span
                                    id={artist.id}
                                    key={artist.id}
                                    className={styles.clickable}
                                    onClick={onClickArtist}>
                                        {index !== artists.length-1 ? `${artist.name}, ` : artist.name}
                                    </span>
                                );
                            })
                        }
                    </div>

                    <span className={styles.divider}>|</span>
                    <span 
                        className={`${styles.infoSpan} ${styles.clickable}`}
                        id={albumUri}
                        onClick={onClickAlbum}>{album}</span>
                </div>

                <div className={styles.buttonWrapper}>
                    <button 
                        className={`${styles.button} ${styles.clickable}`}
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
                    <div className={styles.artists}>
                        {
                            artists.map((artist, index) => {
                                return (
                                    <span
                                    id={artist.id}
                                    key={artist.id}
                                    className={styles.clickable}
                                    onClick={onClickArtist}>
                                        {index !== artists.length-1 ? `${artist.name}, ` : artist.name}
                                    </span>
                                );
                            })
                        }
                    </div>


                    <span className={styles.divider}>|</span>
                    <span 
                        className={`${styles.infoSpan} ${styles.clickable}`}
                        id={albumUri}
                        onClick={onClickAlbum}>{album}</span>
                </div>

                <div className={styles.buttonWrapper}>
                    <button 
                        className={`${styles.button} ${styles.clickable}`}
                        id={id}
                        onClick={onSelectSong}>+</button>
                </div>

            </div>
           
        );
    }

}

export default Track;