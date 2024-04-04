import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist({songList, onSelectSong, onClickAlbum, playlistAnimated}){
    console.log(`TrackList: ${playlistAnimated}`)

    if (!songList[0]){
        return (
            <div className={styles.songListWrapperOff}>
                <div className={styles.searchResultsWrapper}>
                    {songList.map((element, index) => {
                        return(
                            <Track
                                key={`song${index}`}
                                id={element.id}
                                songName={element.songName}
                                artist={element.artist}
                                album={element.album}
                                albumUri={element.albumUri}
                                uri={element.uri}
                                onSelectSong={onSelectSong}
                                onClickAlbum={onClickAlbum}
                            />
                        );
                    })}
                </div>
            </div>
        ); 
        
    } else {
        return (
            <div className={`${styles.songListWrapper} ${playlistAnimated ? styles.animateSlideOut : ''}`}>
                <div className={styles.searchResultsWrapper}>
                    {songList.map((element, index) => {
                        return(
                            <Track
                                key={`song${index}`}
                                id={element.id}
                                songName={element.songName}
                                artist={element.artist}
                                album={element.album}
                                albumUri={element.albumUri}
                                uri={element.uri}
                                onSelectSong={onSelectSong}
                                onClickAlbum={onClickAlbum}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default Tracklist;