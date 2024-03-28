// Ska hämta en array av resultat, varje element ska skickas till Track som renderar varje item, denna component renderar hela listan

import React from 'react';
import Track from './Track';

const result = {
    songs: [
        {
            songName: "Face to face",
            artist: 'Daft Punk',
            album: 'Discovery'
        },
        {
            songName: "FACE",
            artist: "BROCKHAMPTON",
            album: "SATURATION"
        },
        {
            songName: "Eyes without a face",
            artist: "Billy Idol",
            album: "Rebel Yell"
        }
    ]
}

const {songs} = result;


function SearchResults({url}){

    if(url === 'part1test'){
        return (
            <>
                {songs.map((element, index) => {
                    return(
                        <Track
                            id={index}
                            songName={element.songName}
                            artist={element.artist}
                            album={element.album}
                        />
                    );
                })}
            </>
        );
    }

}

export default SearchResults;