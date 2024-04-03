import React from 'react';
import styles from './AuthButton.module.css';
import spotifyLogo from './spotify-logo.png';

function AuthButton({onClick}){
    return (
        <div className={styles.authWrapper}>
            <h1 className={styles.jammming}>Jammming</h1>

            <div className={styles.spacerDiv}>
                <button 
                    className={styles.button} 
                    onClick={onClick}>
                        <img 
                        src={spotifyLogo}
                        className={styles.logo} 
                        alt='spotify logo'/>

                    Connect your Spotify Account
                </button>
            </div>
        </div>
    );
}

export default AuthButton;