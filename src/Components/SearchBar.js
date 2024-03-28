import React, { useState } from 'react';

function SearchBar({search, onSearch}) {

    return (
        <>
            <form autoComplete="off">
                <label for="search">Search</label>
                <input 
                    id="search"
                    type="text"
                    value={search}
                    onChange={onSearch}
                />
                <button>🔍</button>
            </form>
            <p>{search}</p>
        </>
    );
}

export default SearchBar;