import React, { useState } from 'react';

function SearchBar({search, onSearch, onSubmit}) {

    return (
        <>
            <form autoComplete="off" onSubmit={onSubmit}>
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