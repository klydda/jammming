import React from 'react';
import styles from './Tracklist.module.css';

function Tracklist({songList}){

    return (
        <div className={styles.songListWrapper}>
            <p>{songList}</p>
        </div>
    );

}

export default Tracklist;