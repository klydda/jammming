import React from 'react';
import styles from './AuthButton.module.css';

function AuthButton({onClick}){
    return (
        <div className={styles.authWrapper}>
            <button className={styles.button} onClick={onClick}>Connect your Spotify Account</button>
        </div>
    );
}

export default AuthButton;