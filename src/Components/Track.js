import React from 'react';

function Track({ id, songName, artist, album }) {
    return (
        <div id="id">
            <h4>{songName}</h4>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    )
}

export default Track;