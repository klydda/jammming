import React, { useState } from 'react';

function SearchBar({search, onSearch, onSubmit}) {

    return (
        <>
            <form autoComplete="off" onSubmit={onSubmit}>
                <label htmlFor="search">Search</label>
                <input 
                    id="search"
                    type="text"
                    value={search}
                    onChange={onSearch}
                />
                <button>🔍</button>
            </form>
        </>
    );
}

export default SearchBar;