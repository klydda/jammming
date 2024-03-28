import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';

function SearchContainer() {
    const [search, setSearch] = useState('');

    function handleSearchInput(e){
        setSearch(e.target.value);
    }

    return (
        <SearchBar
            search={search}
            onSearch={handleSearchInput}
        />
    );
}

export default SearchContainer;