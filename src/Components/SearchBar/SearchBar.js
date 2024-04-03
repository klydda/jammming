import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import searchIcon from './search.png';

function SearchBar({search, onSearch, onSubmit}) {

    return (
        <div className={styles.wrapper}>
            <form 
                id="search" 
                autoComplete="off" 
                onSubmit={onSubmit}>
                <input 
                    id="search"
                    className={styles.input}
                    type="text"
                    placeholder='Search'
                    value={search}
                    onChange={onSearch}
                />
            </form>

            <div>
                <button 
                    form="search"
                    className={styles.button}>
                        <img 
                            src={searchIcon}
                            className={styles.icon}
                        />
                    </button>
            </div>
        </div>
    );
}

export default SearchBar;