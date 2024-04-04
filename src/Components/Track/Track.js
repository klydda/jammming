import React from 'react';
import styles from './Tracks.module.css';


function Track({ id, songName, artists, album, albumUri, onSelectSong, onRemoveSong, onClickAlbum }) {

    console.log(artists);

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
                                    id={artist.id}>
                                        {index !== artists.length-1 ? `${artist.name}, ` : artist.name}
                                    </span>
                                );
                            })
                        }
                    </div>

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
                    <div className={styles.artists}>
                        {
                            artists.map((artist, index) => {
                                return (
                                    <span
                                    id={artist.id}>
                                        {index !== artists.length-1 ? `${artist.name}, ` : artist.name}
                                    </span>
                                );
                            })
                        }
                    </div>


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