import React from 'react';
import styles from './ConfirmSave.module.css';

function ConfirmSave({saved, playlistName}){
    if (saved) {
        return (
            <div className={styles.wrapper}>
                <p>{playlistName} was saved to your Spotify account!</p>
            </div>
        );
    }
}

export default ConfirmSave;